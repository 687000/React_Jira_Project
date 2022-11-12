import { Settings } from "http2";
import React, { FormEvent } from "react";
import { login, logout } from "auth-provider";

export const LoginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" id={"username"} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id={"password"} />
        </div>
        <button type={"submit"}>Login</button>
      </form>
      <button onClick={logout}>Logout</button>
    </>
  );
};
