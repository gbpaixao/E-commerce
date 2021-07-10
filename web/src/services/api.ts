/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import notifyResponse from './notifyResponse';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3333'
  : 'https://e-commerce-ufs.herokuapp.com/';

class Api {
  #axiosInstance: AxiosInstance;

  constructor() {
    this.#axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.#axiosInstance.interceptors.request.use((config) => {
      const authToken = localStorage.getItem('authToken');
      config.headers.Authorization = `Bearer ${authToken}`;

      return config;
    },
    (error) => {
      // request error
      Promise.reject(error);
    });
  }

  /**
   * GET method
   * @param url is the server URL that will be used for the request
   * @param config is the config that was provided to `axios` for the request
   * @param showNotification whether to show toast notification or not
   * @param notificationText custom notification text
   */
  async get(
    url: string,
    config?: AxiosRequestConfig,
    showNotification = true,
    notificationText?: string,
  ): Promise<AxiosResponse<any>> {
    try {
      const response = await this.#axiosInstance.get(url, config);
      notifyResponse(response.status, showNotification, notificationText);
      return response;
    } catch (error) {
      console.log('error', error);
      notifyResponse(error.response.status);
      return undefined as unknown as AxiosResponse;
    }
  }

  /**
   * POST method
   * @param url is the server URL that will be used for the request
   * @param data is the data to be sent as the request body
   * @param config is the config that was provided to `axios` for the request
   * @param showNotification whether to show toast notification or not
   * @param notificationText custom notification text
   */
  async post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    showNotification = true,
    notificationText?: string,
  ): Promise<AxiosResponse<any>> {
    try {
      const response = await this.#axiosInstance.post(url, data, config);
      notifyResponse(response.status, showNotification, notificationText);
      return response;
    } catch (error) {
      notifyResponse(error.response.status);
      return undefined as unknown as AxiosResponse;
    }
  }

  /**
   * PUT method
   * @param url is the server URL that will be used for the request
   * @param data is the data to be sent as the request body
   * @param config is the config that was provided to `axios` for the request
   * @param showNotification whether to show toast notification or not
   * @param notificationText custom notification text
   */
  async put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    showNotification = true,
    notificationText?: string,
  ): Promise<AxiosResponse<any>> {
    try {
      const response = await this.#axiosInstance.put(url, data, config);
      notifyResponse(response.status, showNotification, notificationText);
      return response;
    } catch (error) {
      notifyResponse(error.response.status);
      return undefined as unknown as AxiosResponse;
    }
  }

  /**
   * DELETE method
   * @param url is the server URL that will be used for the request
   * @param config is the config that was provided to `axios` for the request
   * @param showNotification whether to show toast notification or not
   * @param notificationText custom notification text
   */
  async delete(
    url: string,
    config?: AxiosRequestConfig,
    showNotification = true,
    notificationText?: string,
  ): Promise<AxiosResponse<any>> {
    try {
      const response = await this.#axiosInstance.delete(url, config);
      notifyResponse(response.status, showNotification, notificationText);
      return response;
    } catch (error) {
      notifyResponse(error.response.status);
      return undefined as unknown as AxiosResponse;
    }
  }
}

const api = new Api();

export default api;
