import { BaseUrl } from "../api/ApiBaseUrl";
import { UserContext } from "../contexts/userContext";

const useRetriveUserData = () => {
  const { dispatch } = UserContext();
  const retriveUserData = async () => {
    const {
      data: { response },
    } = await (await BaseUrl()).get("/api/user/");

    dispatch({ type: "RETRIVE_DATA", payload: { habits: response?.habits } });

    return response;
  };

  return { retriveUserData };
};

export { useRetriveUserData };
