"use client";
import React, { useState } from "react";
import addUser from "../services/addUserService";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, about } = formData;

    if (!name || !email || !password) {
      console.log("Form field is missing");
      return;
    }

    try {
      const res = await addUser(formData);
      console.log("Form Submitted:", formData);
      alert(`New User Created : ${formData.name}`);
      router.push("/");

      setFormData({ name: "", email: "", password: "", about: "" });
      // Optionally reset form here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center mt-10 mb-10">
      <div className="col-span-4 col-start-5 border-2 border-amber-100 p-5 rounded-xl bg-gray-800 text-white">
        <h1 className="text-3xl text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 focus:ring-blue-500 rounded-xl p-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 focus:ring-blue-500 rounded-xl p-2"
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
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 focus:ring-blue-500 rounded-xl p-2"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="about" className="block mb-1.5">
              About
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="4"
              className="w-full bg-gray-700 focus:ring-blue-500 rounded-xl p-2"
              placeholder="Tell us about yourself"></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all w-full py-2 rounded font-semibold mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
