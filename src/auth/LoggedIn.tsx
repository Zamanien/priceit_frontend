import { useUser } from "./useUser";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";
import SpringModal from "../components/Modal/SpringModal";
import { User } from "../types";
import { render } from "react-dom";
import { Logout } from "../components/Users/Logout/Logout";
export const useAuth = (data: any, cookie: { logged_in?: any }) => {
  if (!data) {
    return false;
  } else if (data.sub.role === "user" && cookie.logged_in) {
    return true;
  }
};

function LoggedIn() {
  const [cookie] = useCookies(["logged_in"]);
  const data = useUser();
  const auth = useAuth(data, cookie);

  return auth ? <Logout /> : <SpringModal  />;
}

export default LoggedIn;
