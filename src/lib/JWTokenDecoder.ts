import { jwtDecode } from 'jwt-decode';

export const decodeToken = (token: string) => {
  const decodedToken = jwtDecode(token);
  return decodedToken;
};
