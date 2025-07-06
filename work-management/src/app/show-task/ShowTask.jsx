"use client";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import getTaskById from "../services/userTask";
import TaskCard from "./TaskCard";
import deleteTaskById from "../services/deleteTaskService";
import updateTaskStatus from "../services/taskStatusUpdateService";

const ShowTask = () => {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await getTaskById(user._id);
      console.log("Fetched tasks:", data);
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  useEffect(() => {
    if (!user || !user._id) return; // 👈 Wait until user is loaded

    loadTasks();
  }, [user]); // 👈 Rerun when user is fetched

  if (!user) {
    return <p>Loading user...</p>;
  }

  // ✅ Load tasks on first render
  // useEffect(() => {
  //   if (context.user?._id) {
  //     loadTasks(context.user._id);
  //   }
  // }, [context.user]);

  // ✅ Handle deletion
  const deleteTaskInParent = async (taskId) => {
    try {
      const res = await deleteTaskById(taskId);
      const updated = tasks.filter((task) => task._id !== taskId);
      setTasks(updated);
    } catch (error) {
      console.log("Error in showtask delete func", error);
      alert("Failed to delete task");
    }
  };
  const updateStatusParent = async (taskId, currentStatus) => {
    try {
      const newStatus = currentStatus === "completed" ? "pending" : "completed";
      const res = await updateTaskStatus(taskId, newStatus);
      await loadTasks();
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };

  return (
    <div
      className="container grid  bg-black mb-10
    ">
      <h1 className="text-4xl  mt-5 mb-3 border-2 border-gray-600 px-8 py-4 rounded-md inline-block mx-auto font-extrabold animate-fade-in-down text-blue-400">
        <b>Your Tasks</b>
      </h1>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            deleteTaskInParent={deleteTaskInParent}
            updateStatusParent={updateStatusParent}
          />
        ))
      )}
    </div>
  );
};

export default ShowTask;
