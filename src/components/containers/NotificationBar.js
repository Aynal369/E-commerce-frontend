import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import avatar from "../../images/user.png";

const NotificationBar = () => {
  return (
    <section className="bg-light shadow-sm">
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between">
            <div className="">
              <p className="display-6">Welcome </p>
            </div>
            <div className="d-flex">
              <div className="me-5">
                <span className="mx-2">
                  <FavoriteBorderIcon />
                </span>
                <span className="mx-2">
                  <AddShoppingCartIcon />
                </span>
              </div>
              <ul className="list-unstyled m-0">
                <li className="nav-item dropdown me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={avatar}
                      alt="avatar"
                      width={30}
                      className="rounded-circle me-1 border border-3"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end mt-3 p-2 text-center"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        <DashboardIcon fontSize="small" />
                        <span className="ms-2">Dashboard</span>
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Button
                        //  onClick={handleSignOut}
                        variant="contained"
                        color="error"
                        disabled
                      >
                        Sign Out
                      </Button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationBar;
