import { getCurrentAdminInfo, isAdminLoggedIn } from '@/services/auth.service';
import { IAdminInfo } from '@/types/common.types';

export const isLoggedIn = () => {
  const isAdminUserLoggedIn = isAdminLoggedIn();
  return isAdminUserLoggedIn;
};

export const currentAdminInfo = (): IAdminInfo | null => {
  const currentAdmin = getCurrentAdminInfo();
  return currentAdmin;
};
