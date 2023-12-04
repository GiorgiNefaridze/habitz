import axios from "axios";
import Storage from "@react-native-async-storage/async-storage";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://192.168.100.8:3400/";

const networkClient = axios;

export const getRequestHeader = async (): Promise<{
  Authorization: string;
}> => {
  const token = await Storage.getItem("token");

  return { Authorization: "Bearer " + token ?? "" };
};

export default networkClient;
