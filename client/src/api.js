import axios from "axios";

export const getApiVersion = async () => {
  try {
    return await axios.get("/api/version");
  } catch (e) {
    return e;
  }
};
