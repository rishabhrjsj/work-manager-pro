import httpAxios from "../helper/axios";
const addUser = async (User) => {
  try {
    const res = await httpAxios.post("/api/users", User);
    return res.data;
  } catch (error) {
    console.log(`new user can not created ${error}`);
  }
};

export default addUser;
