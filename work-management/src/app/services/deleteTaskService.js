import httpAxios from "../helper/axios";

export default function deleteTaskById(id) {
  try {
    const res = httpAxios.delete(`api/task/${id}`);
    return res.data;
  } catch (error) {
    console.log("error in delete service ", error);
  }
}
