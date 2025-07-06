import httpAxios from "../helper/axios";

const addTask = async (task) => {
  try {
    const res = await httpAxios.post("/api/task", task);
    return res.data; // return response data
  } catch (error) {
    console.error("Failed to add task:", error);
    throw error; // rethrow if you want to handle in component
  }
};

export default addTask;
