/* eslint-disable require-await */
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { toast } from 'sonner';
import { removeAdmin } from '../auth.service';

export const logoutAdmin = async (router: AppRouterInstance) => {
  try {
    await removeAdmin();

    toast('Admin logged out successfully', {
      position: 'bottom-right',
      duration: 1500,
      icon: '👋',
    });

    setTimeout(() => {
      router.push('/login');
    }, 200);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.debug('logoutAdmin failed', err);
    toast('Logout failed. Please try again.', {
      position: 'bottom-right',
      duration: 2000,
      icon: '❌',
    });
  }
};
