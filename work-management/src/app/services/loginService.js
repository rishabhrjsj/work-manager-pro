import httpAxios from "../helper/axios";
const login = async (user) => {
  try {
    const res = await httpAxios.post("/api/login", user);
    return res.data; // return response data (e.g., { success: true, message: ... })
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    throw err; // rethrow for caller to handle
  }
};

export default login;
