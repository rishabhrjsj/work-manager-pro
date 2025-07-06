import httpAxios from "../helper/axios";

const updateTaskStatus = async (id, newStatus) => {
  try {
    const res = await httpAxios.put(`/api/task/${id}`, { status: newStatus }); // ✅ wrap in { status }
    return res.data;
  } catch (error) {
    console.error("Error updating task status:", error);
    throw error;
  }
};

export default updateTaskStatus;
