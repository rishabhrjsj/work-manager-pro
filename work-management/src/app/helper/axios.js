import axios from "axios";

const httpAxios = axios.create({
  baseURL: process.env.BASE_URL || "", // "" works for same-origin in Next.js
  withCredentials: true, // ✅ ensures cookies like loginToken are sent
});

export default httpAxios;
