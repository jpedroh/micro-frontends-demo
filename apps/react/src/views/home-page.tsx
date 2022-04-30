import React from "react";
import { navigateToUrl } from 'single-spa';
import { useUser } from "../context/UserContext";

export const HomePage = () => {
  const user = useUser();

  return <section>
    <h1>Hello from React!</h1>
    <h2>I'm React application</h2>
    <p><a href="/" onClick={navigateToUrl}>Click here to go back to Angular.</a></p>
    {!user ? <p>Loading</p> : JSON.stringify(user)}
  </section>
}
