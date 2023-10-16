import axios from "axios";

const BaseUrl = () => {
  const token = "";

  return axios.create({
    headers: { Authorization: "Bearer " + token },
    baseURL: "http://localhost:3400",
  });
};

export { BaseUrl };
