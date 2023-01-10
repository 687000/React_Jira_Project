import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";
import { useCallback } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
//endpoint, like login/project
//config add defult value: so config could be empty
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      //Bearer is the standard begining form of token
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  //axios and fetch:
  //axios will return all error status that is not 200
  //fetch will not
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      //401 unauthorized
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "Please try to login again." });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
        //manutally report when there is error like internet error connection
        //regular error like 404 will belong to response.ok
      } else {
        return Promise.reject(data);
      }
    });
};
//custom hook ( since we want to use hook )
export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      http(endpoint, { ...config, token: user?.token }),
    [user?.token]
  );
};
