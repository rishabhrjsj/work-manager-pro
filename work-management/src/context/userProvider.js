"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import currentUser from "@/app/services/currentUser";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const load = async () => {
      try {
        const logUser = await currentUser();
        setUser(logUser); // No need for {...logUser}
        console.log("Logged-in user:", logUser);
      } catch (error) {
        console.error("Error fetching current user:", error);
        setUser(undefined);
      }
    };
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
