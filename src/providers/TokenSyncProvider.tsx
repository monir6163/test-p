'use client';

import { authKey } from '@/constant/authKey';
import { getClientCookie } from '@/lib/clientCookies';
import { getFromLocalStorage, setToLocalStorage } from '@/lib/localStorage';
import { setAccessToken } from '@/services/actions/setAccessToken';
import { useEffect, useRef } from 'react';

export const TokenSyncProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isLogoutInProgress = useRef(false);

  useEffect(() => {
    const bidirectionalTokenSync = async () => {
      if (isLogoutInProgress.current) {
        return;
      }

      const localStorageToken = getFromLocalStorage(authKey);
      const cookieToken = getClientCookie(authKey);

      if (!localStorageToken && !cookieToken) {
        isLogoutInProgress.current = true;

        setTimeout(() => {
          isLogoutInProgress.current = false;
        }, 2000);
        return;
      }

      if ((localStorageToken || cookieToken) && isLogoutInProgress.current) {
        isLogoutInProgress.current = false;
      }

      if (localStorageToken && cookieToken) {
        if (localStorageToken !== cookieToken) {
          try {
            await setAccessToken(localStorageToken);
          } catch (err) {
            // intentionally non-fatal - log for debug
            // eslint-disable-next-line no-console
            console.debug('setAccessToken failed', err);
          }
        }
        return;
      }

      if (localStorageToken && !cookieToken) {
        try {
          await setAccessToken(localStorageToken);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.debug('setAccessToken failed', err);
        }
        return;
      }

      if (!localStorageToken && cookieToken && !isLogoutInProgress.current) {
        try {
          setToLocalStorage(authKey, cookieToken);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.debug('setToLocalStorage failed', err);
        }
        return;
      }
    };

    bidirectionalTokenSync();

    // Set up a listener for localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === authKey) {
        bidirectionalTokenSync();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    const intervalId = setInterval(() => {
      bidirectionalTokenSync();
    }, 10000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  return <>{children}</>;
};
