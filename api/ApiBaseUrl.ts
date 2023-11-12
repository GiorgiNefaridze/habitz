import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

const BaseUrl = async (): Promise<AxiosInstance> => {
  const token = await AsyncStorage.getItem("token");

  return axios.create({
    headers: { Authorization: "Bearer " + token },
    baseURL: "http://192.168.100.3:3400",
  });
};

export { BaseUrl };
