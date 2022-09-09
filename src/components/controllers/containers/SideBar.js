import React from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const sideBarData = [
  {
    id: "01",
    title: "Dashboard",
    urlLink: "/dashboard",
    titleIcon: DashboardIcon,
    bgColor: "bg-primary",
  },
  {
    id: "02",
    title: "Add Product",
    urlLink: "/dashboard/add-a-product",
    titleIcon: AddIcon,
    bgColor: "bg-primary",
  },
  {
    id: "03",
    title: "All Product",
    urlLink: "/dashboard/all-product-list",
    titleIcon: ListAltIcon,
    bgColor: "bg-primary",
  },
];

const SideBar = () => {
  return (
    <aside>
      <div className="text-center mt-3 text-light">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="d-none d-md-block fw-bold">E-commerce</p>
          <p className="d-block d-md-none fw-bold">E</p>
        </Link>
      </div>
      <hr />
      <ul className="navbar-nav flex-column">
        {sideBarData.map((data) => (
          <li className={`nav-item mb-4 ${data.bgColor} shadow`} key={data.id}>
            <NavLink className="nav-link" to={data.urlLink}>
              <div className="d-flex align-items-center px-1">
                <div className="text-light me-3 opacity-50">
                  {<data.titleIcon />}
                </div>
                <div className="d-none d-md-block">
                  <span className="text-light">{data.title}</span>
                </div>
                <div className="text-light ms-auto opacity-25">
                  <ArrowRightIcon />
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
