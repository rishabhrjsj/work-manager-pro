import React from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function TaskCard({
  task,
  deleteTaskInParent,
  updateStatusParent,
}) {
  const handleClick = () => {
    deleteTaskInParent(task._id);
  };
  const handleStatus = () => {
    updateStatusParent(task._id, task.status);
  };

  return (
    <div className="grid grid-cols-12 ">
      <div
        className={`bg-gray-800 text-white shadow-md p-4 col-start-4 col-end-10 col-span-7 
    border-b border-b-black rounded-2xl mt-0.5 mb-0.5
    ${
      task.status === "completed"
        ? "bg-green-700 text-white"
        : "bg-gray-500 text-white"
    }`}>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-2">{task.work}</h2>
          <RxCrossCircled
            onClick={handleClick}
            className=" hover:bg-gray-700 text-3xl rounded-full cursor-pointer"
          />
        </div>

        <p className="text-sm text-gray-300 mb-4">{task.description}</p>

        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full cursor-pointer ${
              task.status === "completed"
                ? "bg-gray-900 text-white"
                : "bg-yellow-600 text-white"
            }`}
            onClick={handleStatus}>
            {task.status}
          </span>
          <span className="text-xs text-gray-400">
            Task ID: {task._id.slice(-5)}
          </span>
        </div>
      </div>
    </div>
  );
}
