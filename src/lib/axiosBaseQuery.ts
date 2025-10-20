/* eslint-disable no-unused-vars */
import { authKey } from '@/constant/authKey';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { getFromLocalStorage } from '../lib/localStorage';
import { IMeta } from '../types/common.types';
import { axiosInstance } from './axiosInstance';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers, contentType }) => {
    const token = getFromLocalStorage(authKey);
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          'Content-Type': contentType || 'application/json',
          Authorization: token,
        },
      });

      // The axiosInstance response interceptor already transforms the response
      // so 'result' is the transformed data, not the raw axios response
      return { data: result };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
