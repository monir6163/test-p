/* eslint-disable consistent-return */
'use client';

import { authKey } from '@/constant/authKey';
import { getFromLocalStorage, setToLocalStorage } from '@/lib/localStorage';
import axios from 'axios';
import { toast } from 'sonner';
import { setAccessToken } from '../services/actions/setAccessToken';
import { getNewAccessToken } from '../services/auth.service';
import { IErrorResponse, ISuccessResponse } from '../types/common.types';

export const axiosInstance = axios.create();

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObj: ISuccessResponse = {
      data: response?.data?.data || response?.data, // Fallback to response.data if response.data.data doesn't exist
      message: response?.data?.message || 'Request successful',
      success:
        response?.data?.success !== undefined ? response?.data?.success : true, // Default to true if not specified
      statusCode: response?.status,
    };

    return responseObj;
  },
  async function (error) {
    const config = error?.config;
    //here config.sent is used to prevent infinite loop. !config.sent checks if this request hasn't been sent previously.. if it is true we set config.sent = true to mark it as sent request successfully. so it won't be sent again to get new access token
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.access_token;
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        setToLocalStorage(authKey, accessToken);
        setAccessToken(accessToken);
        return axiosInstance(config);
      }

      toast.error('Session expired. Please login again.', {
        position: 'bottom-right',
        duration: 1500,
        icon: '❌',
      });
    } else {
      const responseObj: IErrorResponse = {
        success: error?.response?.data?.success || false,
        message: error?.response?.data?.message || 'Something went wrong',
        errorMessages: error?.response?.data?.errorMessages || [
          { path: '', message: 'Something went wrong' },
        ],
        statusCode: error?.response?.status || 500,
      };
      toast.error(
        responseObj.errorMessages?.[0]?.message || responseObj.message,
        {
          position: 'bottom-right',
          duration: 1500,
          icon: '❌',
        }
      );
      return responseObj;
    }
  }
);
