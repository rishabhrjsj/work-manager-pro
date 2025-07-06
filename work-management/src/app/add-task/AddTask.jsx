"use client";
import taskimage from "../assets/form.svg";
import Image from "next/image";
import React, { useState } from "react";
import addTask from "../services/addTaskService";

export default function AddTask() {
  const notify = () => toast();
  const [formData, setFormData] = useState({
    work: "",
    description: "",
    status: "",
    user: "",
  });
  console.log(formData);

  const handleSubmit = async (event) => {
    console.log("form data", formData);
    event.preventDefault();
    try {
      // formData.user = data._id;

      const res = await addTask(formData); // ✅ Await the async call
      console.log("Task added:", res); // ✅ Optional: check the response
      alert("Succesfuuly task added.");
    } catch (err) {
      console.error("Error adding task:", err);
      alert("Failed to add task.");
    }
    setFormData({
      work: "",
      description: "",
      status: "",
      user: "",
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  return (
    <div className="grid grid-cols-12 justify-center mt-10 mb-10">
      {/* ✅ Wrap all inputs inside a <form> and put onSubmit here */}

      <form
        onSubmit={handleSubmit}
        className="border-2 border-white-500 p-5 col-span-4 col-start-5 rounded-2xl">
        <div className="flex justify-center">
          <Image
            src={taskimage}
            alt="form-image"
            className="w-42 h-42 rounded"
          />
        </div>

        <h1 className="text-4xl sm:text-4xl text-blue-500 font-extrabold leading-tight mb-6 animate-fade-in-down flex justify-center">
          <b>Add your Task</b>
        </h1>

        <div>
          <label htmlFor="add-task" className="block mb-1.5 mt-2">
            <b>Task</b>
          </label>
          <input
            value={formData.work}
            name="work"
            onChange={handleInputChange}
            type="text"
            id="add-task"
            className="w-full bg-gray-800 focus:ring-blue-500 rounded-xl outline outline-offset-2 outline-white p-2"
          />
        </div>

        <div>
          <label htmlFor="task-description" className="block mb-1.5 mt-2">
            <b>Description</b>
          </label>
          <textarea
            rows={5}
            value={formData.description}
            name="description"
            onChange={handleInputChange}
            id="task-description"
            className="bg-gray-800 focus:ring-blue-500 rounded-xl outline outline-offset-2 outline-white w-full p-2"></textarea>
        </div>

        <div>
          <label htmlFor="task-status" className="block mb-1.5 mt-2">
            <b>Status</b>
          </label>
          <select
            value={formData.status}
            name="status"
            onChange={handleInputChange}
            id="task-status"
            className="bg-gray-800 focus:ring-blue-500 rounded-xl outline outline-offset-2 outline-white w-full p-2">
            <option value="" disabled>
              Select
            </option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 rounded-lg p-2 mr-2 mt-4">
            Submit
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                work: "",
                description: "",
                status: "",
                user: "",
              })
            }
            className="bg-red-600 rounded-lg p-2 mt-4">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
