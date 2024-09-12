// import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-16 md:ml-56">
        <div className="">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
