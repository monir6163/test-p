import { admin_info_key, authKey } from '@/constant/authKey';
import { decodeToken } from '@/lib/JWTokenDecoder';
import { getClientCookie } from '@/lib/clientCookies';
import { CustomJwtPayload, IAdminInfo } from '@/types/common.types';
import { axiosInstance } from '../lib/axiosInstance';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '../lib/localStorage';
import { setAccessToken } from './actions/setAccessToken';

export const storeToken = async (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);

  try {
    await setAccessToken(accessToken);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.debug('setAccessToken failed', err);
  }
};

export const storeAdminInfo = (adminInfo: IAdminInfo) => {
  setToLocalStorage(admin_info_key, JSON.stringify(adminInfo));
};

export const getAdminInfo = (): IAdminInfo | null => {
  const adminInfoString = getFromLocalStorage(admin_info_key);
  if (!adminInfoString) {
    return null;
  }
  try {
    return JSON.parse(adminInfoString) as IAdminInfo;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.debug('parse admin info failed', err);
    return null;
  }
};

export const getCurrentAdminInfo = (): IAdminInfo | null => {
  const adminInfo = getAdminInfo();
  if (adminInfo) {
    return adminInfo;
  }

  let accessToken = getFromLocalStorage(authKey);

  // If localStorage is empty, try cookies
  if (!accessToken) {
    accessToken = getClientCookie(authKey);

    // If found in cookie, restore to localStorage
    if (accessToken) {
      try {
        setToLocalStorage(authKey, accessToken);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.debug('setToLocalStorage failed', err);
      }
    }
  }

  if (!accessToken) {
    return null;
  }

  let currentAdmin: IAdminInfo | null = null;

  try {
    const decodedAdmin = decodeToken(accessToken) as CustomJwtPayload;

    if (!decodedAdmin.sub || !decodedAdmin.role) {
      return null;
    }

    currentAdmin = {
      admin_id:
        typeof decodedAdmin.sub === 'number'
          ? decodedAdmin.sub
          : parseInt(decodedAdmin.sub.toString()),
      email: '',
      username: '',
      role: decodedAdmin.role,
      permissions: decodedAdmin.permissions || [],
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.debug('decodeToken failed', err);
    currentAdmin = null;
  }
  return currentAdmin;
};

export const isAdminLoggedIn = () => {
  const accessTokenFromLocalStorage = getFromLocalStorage(authKey);
  if (accessTokenFromLocalStorage) {
    return true;
  }

  // If localStorage is empty, check cookies as fallback
  const accessTokenFromCookie = getClientCookie(authKey);
  if (accessTokenFromCookie) {
    try {
      setToLocalStorage(authKey, accessTokenFromCookie);

      return true;
    } catch {
      return true;
    }
  }

  return false;
};

export const removeAdmin = async () => {
  removeFromLocalStorage(authKey);
  removeFromLocalStorage(admin_info_key);

  try {
    const { deleteCookies } = await import('./actions/deleteCookies');
    await deleteCookies([authKey]);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.debug('deleteCookies failed', err);
  }

  setTimeout(() => {
    removeFromLocalStorage(authKey);
    removeFromLocalStorage(admin_info_key);
  }, 100);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/admin/auth/refresh`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
