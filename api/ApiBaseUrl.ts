import axios from "axios";

const BaseUrl = () => {
  const token = "";

  return axios.create({
    headers: { Authorization: "Bearer " + token },
    baseURL: "http://192.168.100.4:3400",
  });
};

export { BaseUrl };
