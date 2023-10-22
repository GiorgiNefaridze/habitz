import axios from "axios";

const BaseUrl = () => {
  const token = "";

  return axios.create({
    headers: { Authorization: "Bearer " + token },
    baseURL: "http://192.168.100.8:3400",
  });
};

export { BaseUrl };
