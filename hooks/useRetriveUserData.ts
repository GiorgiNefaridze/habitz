import { BaseUrl } from "../api/ApiBaseUrl";

const useRetriveUserData = () => {
  const retriveUserData = async () => {
    const {
      data: { response },
    } = await (await BaseUrl()).get("/api/user/");

    return response;
  };

  return { retriveUserData };
};

export { useRetriveUserData };
