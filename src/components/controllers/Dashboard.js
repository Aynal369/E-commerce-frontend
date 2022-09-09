import React from "react";
import { Outlet } from "react-router-dom";
import NotificationBar from "../containers/NotificationBar";
import SideBar from "./containers/SideBar";

const Dashboard = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-2 p-0 border-end bg-dark">
            <SideBar />
          </div>
          <div className="col-10 p-0">
            <NotificationBar />
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
