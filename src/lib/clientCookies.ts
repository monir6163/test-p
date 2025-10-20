export const getClientCookie = (name: string): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue || null;
  }

  return null;
};

export const checkClientCookieExists = (name: string): boolean => {
  return getClientCookie(name) !== null;
};
