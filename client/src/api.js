import axios from "axios";

export const getApiVersion = async () => {
  return await axios.get("/api/version");
};
