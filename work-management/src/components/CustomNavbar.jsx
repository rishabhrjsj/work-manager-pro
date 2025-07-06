"use client";
import UserContext from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";
import logout from "@/app/services/logoutService";
import { useRouter } from "next/navigation";

export default function CustomNavbar() {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      await logout();
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      alert("Failed to log out. Please try again.");
      console.error("Logout error:", error);
    }
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white h-16 px-8 flex justify-between items-center shadow-lg">
      {/* Brand/Logo Section */}
      <div className="flex items-center">
        <Link
          href={"/"}
          className="font-extrabold text-2xl tracking-tight text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
          WorkManager Pro
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="flex items-center flex-grow justify-center">
        {" "}
        {/* Centered navigation */}
        <ul className="flex space-x-10 text-lg font-medium">
          {context.user && (
            <>
              <li>
                <Link
                  href={"/"}
                  className="relative hover:text-blue-300 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/add-task"}
                  className="relative hover:text-blue-300 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  href={"/show-task"}
                  className="relative hover:text-blue-300 transition-colors duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                  View Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* User/Auth Actions */}
      <div className="flex items-center space-x-6">
        {context.user ? (
          <>
            {context.user && (
              <span className="text-gray-300 text-base font-normal hidden md:block">
                Welcome,{" "}
                <span className="font-semibold">{context.user.name}!</span>
              </span>
            )}
            <button
              onClick={doLogout}
              className="px-5 py-2 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href={"/signup"}
              className="text-gray-300 hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Sign Up
            </Link>
            <Link
              href={"/login"}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
