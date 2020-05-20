import React from "react";
import Login from "./Login";
import { useAuth } from "./storeApi";

export const About = () => {
  const { auth, username } = useAuth();
  return (
    <>
      <h1>about</h1>
      {auth ? <h2>your are auth {username}</h2> : <h3>not auth</h3>}
    </>
  );
};
export const Post = () => {
  return <h1>Post</h1>;
};
export const NotFound = () => {
  return <h1>NotFound 404</h1>;
};
export const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <Login />
    </>
  );
};
