/* eslint-disable require-await */
'use server';
import { cookies } from 'next/headers';

export const getCookies = async (authKey: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(authKey)?.value;
};
