import axios from "axios";

const getTaskById = async (userId) => {
  try {
    const response = await axios.get(`/api/task/user/${userId}`);
    console.log("service tasks res", response.data.tasks);
    return response.data.tasks;
  } catch (error) {
    console.error(
      " Error fetching tasks:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default getTaskById;
