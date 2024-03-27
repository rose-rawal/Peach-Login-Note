import context from "./maincontext";
import React from "react";
import { useState } from "react";

const Context = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    Name: "",
    Password: "",
    Email: "",
  });

  const checkSignUp = ({ Name, Password, Email }) => {
    const response = { err: "Success", text: "Success" };
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!Name & !Email & !Password) {
      response.err = "All";
      response.text = "Please Enter Name Email and Password";
      return response;
    }
    if ((Name.length < 4) | (Name.length > 16)) {
      response.err = "Name";
      response.text = "Name length should be between 4-16";
      return response;
    }

    if (!Email.match(pattern)) {
      response.err = "Email";
      response.text = "Pease enter email in requested format abc@abc.com";
      return response;
    }
    if ((Password.length < 8) | (Password.length > 16)) {
      response.err = "Password";
      response.text = "Length of Password should be 8-16";
    }
    return response;
  };

  const checkLogin = (resp, Name) => {
    const response = {};
    let flag = 0;

    if (resp.success) {
      flag = 1;
      setLoggedIn(true);
      setCurrentUser(Name);
    }
    if (flag === 0) {
      response.err = "No Account";
      response.text = "Name and Password Error";
    }
    return response;
  };
  return (
    <context.Provider
      value={{
        loggedIn,
        setLoggedIn,
        setUsers,
        users,
        checkSignUp,
        checkLogin,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
