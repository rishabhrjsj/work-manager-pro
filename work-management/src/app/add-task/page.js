import { cookies } from "next/headers.js";
import AddTask from "./AddTask.jsx";
import jwt from "jsonwebtoken";
export const metadata = {
  title: "Add Task:work manager",
};
export default async function () {
  return (
    <>
      <AddTask />
    </>
  );
}
