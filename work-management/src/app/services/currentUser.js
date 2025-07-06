// services/currentUser.js
import httpAxios from "../helper/axios";

const currentUser = async () => {
  try {
    const res = await httpAxios.get("/api/current");
    return res.data.user; // ✅ Return only the user object
  } catch (error) {
    console.log(`new user can not be fetched: ${error}`);
    return null;
  }
};

export default currentUser;
