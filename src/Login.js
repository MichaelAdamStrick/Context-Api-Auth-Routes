import React from "react";

// import Cookies from "js-cookie";
import { useAuth } from "./storeApi";

export function display(auth) {
  return {
    display: auth ? "block" : "none"
  };
}

const Login = () => {
  const { auth, authenticated } = useAuth();
  const handleClick = () => {
    authenticated();

    console.log(authenticated);
    console.log(auth);
    // Cookies.set("user", "loginTrue");
  };

  return (
    <div>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        style={display(!auth)}
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
