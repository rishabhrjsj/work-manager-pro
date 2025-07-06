import httpAxios from "../helper/axios";
const logout = async () => {
  try {
    const res = await httpAxios.post("/api/logout");
    return res.data;
  } catch (error) {
    console.log(`new user can not created ${error}`);
  }
};
export default logout;
