"use client";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import UserContext from "@/context/userContext";
import { useRouter } from "next/navigation";
export default function Page() {
  const context = useContext(UserContext);
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
          Master Your Tasks with{" "}
          <span className="text-blue-500">WorkManager Pro</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Seamlessly organize, track, and complete your tasks. From personal
          projects to team collaborations, WorkManager Pro empowers you to
          achieve more, effortlessly.
        </p>
        {!context.user && (
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Link
              href={"/signup"}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
              Get Started Free
            </Link>
            <Link
              href={"/login"}
              className="px-8 py-3 border-2 border-blue-600 text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
              Login
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl py-16 bg-gray-900 rounded-xl shadow-xl animate-fade-in-up-delay">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Simplify Your Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {/* Feature Card */}
          {[
            {
              title: "Effortless Task Creation",
              desc: "Quickly add new tasks with all the details you need, from deadlines to priorities.",
              iconColor: "text-blue-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              title: "Clear Overview",
              desc: "See all your tasks at a glance, organized just the way you like it.",
              iconColor: "text-green-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2"
                />
              ),
            },
            {
              title: "Track Progress",
              desc: "Update task statuses as you progress, from 'To Do' to 'Completed'.",
              iconColor: "text-purple-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18"
                />
              ),
            },
            {
              title: "Full Control",
              desc: "Easily edit details or remove tasks when they are no longer needed.",
              iconColor: "text-red-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6"
                />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className={`${item.iconColor} mb-4`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {!context.user && (
        <section className="text-center max-w-3xl mt-16 py-12 px-6 bg-blue-700 text-white rounded-xl shadow-xl animate-fade-in-up-delay-2">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
          <p className="text-lg mb-8">
            Join thousands of users who are boosting their productivity with
            WorkManager Pro.
          </p>
          <Link
            href={"/signup"}
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
            Start Your Free Trial Today
          </Link>
        </section>
      )}
    </div>
  );
}
