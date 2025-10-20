import { JwtPayload } from 'jwt-decode';

export type CustomJwtPayload = {
  admin_id: number;
  email: string;
  username: string;
  role: string;
  permissions: string[];
} & JwtPayload;

export type TLoginCredentials = {
  username: string;
  password: string;
};

export interface IAdminInfo {
  admin_id: number;
  email: string;
  username: string;
  role: string;
  permissions: string[];
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  admin_info: IAdminInfo;
}

export interface IGenericErrorMsg {
  path: string | number;
  message: string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export interface ISuccessResponse {
  data?: any;
  meta?: IMeta;
  success?: boolean;
  message?: string;
  statusCode?: number;
}

export interface IErrorResponse {
  success?: boolean;
  message: string;
  errorMessages?: IGenericErrorMsg[];
  statusCode: number;
}

export interface ICurrentAdmin {
  admin_id: number;
  email: string;
  username: string;
  role: string;
  permissions: string[];
}
