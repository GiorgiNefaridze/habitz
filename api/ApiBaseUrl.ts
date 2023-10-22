import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

const BaseUrl = async (): Promise<AxiosInstance> => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    (async () => {
      const tkn = await AsyncStorage.getItem("token");
      setToken(tkn ?? "");
    })();
  }, []);

  return axios.create({
    headers: { Authorization: "Bearer " + token },
    baseURL: "http://192.168.100.8:3400",
  });
};

export { BaseUrl };
