import React from "react";
import "./styles.css";

import { Routes } from "./Routes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Cookies from "js-cookie";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useAuth } from "./storeApi";

export default function App() {
  const { auth, logOut, authenticated } = useAuth();
  const handlelogin = () => {
    authenticated();

    Cookies.set("user", "loginTrue");
  };

  const handleLogOut = () => {
    logOut();
    Cookies.remove("user");
  };

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      authenticated();
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                className="logo"
                src="https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/dashboard"
                  style={display(auth)}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={display(!auth)}
              onClick={handlelogin}
            >
              Login
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={display(auth)}
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </nav>
        <div className="container">
          <Routes />
        </div>
      </Router>
    </>
  );
}

export function display(auth) {
  return {
    display: auth ? "block" : "none"
  };
}
