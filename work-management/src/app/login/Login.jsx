"use client";
import React, { useContext, useState } from "react";
import login from "../services/loginService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const context = useContext(UserContext);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Logging in with:", formData);
    // You can now call an API like loginUser(formData)
    try {
      const res = await login(formData);
      console.log(res);
      context.setUser(res.user);
      alert("LoggedIn !");
      console.log("USer loggedIn", res);
      if (res.success) {
        router.push("/");
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center mt-10 mb-10">
      <div className="col-span-4 col-start-5 border-2 border-gray-300 p-6 rounded-xl bg-gray-800 text-white">
        <h1 className="text-3xl text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-xl p-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-xl p-2"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
