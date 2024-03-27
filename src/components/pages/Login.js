import React, { useContext, useState } from "react";
import Input from "./formdetails/Input";
import Button from "./formdetails/Button";
import context from "../context/maincontext";
import Error from "../pageinfo/Error";
import useUser from "../../hooks/useUser";
const Login = () => {
  const { setUsers, users, checkSignUp, checkLogin } = useContext(context);
  const [loguser, setLoguser] = useState({
    Name: "",
    Password: "",
  });
  const { addUsers } = useUser();
  const [login, setLogin] = useState(true);
  const [error, setError] = useState({});
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [msg, setMsg] = useState({
    err: "",
    text: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    const abc = checkSignUp({ ...user });
    if (abc.text === "Success") {
      setLogin((prev) => !prev);
      addUsers(user);
    }
    setMsg({ ...abc });
    setTimeout(() => {
      setMsg({
        err: "",
        text: "",
      });
    }, 2000);
    setUsers((n) => {
      if (n === null) {
        return user;
      } else {
        const save = [...n, user];

        return save;
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const abc = checkLogin(loguser.Name, loguser.Password);

    setError({ ...abc });
    setTimeout(() => {
      setError({});
    }, 1000);
  };

  return (
    <div>
      {login ? (
        <h1 className="flex justify-center text-5xl my-10 not_Center">Login</h1>
      ) : (
        <h1 className="flex justify-center text-5xl my-10 not_Center">
          Signup
        </h1>
      )}
      <span className="flex justify-center text-red-400 not_Center">
        {error.text}
      </span>
      <span className="flex justify-center text-red-400 not_Center">
        {msg.text}
      </span>
      {login && (
        <form action="get" className="pt-5 not_Center">
          <Input name="Name" type="text" func={loguser.Name} set={setLoguser} />

          <Input
            name="Password"
            type="password"
            func={loguser.Password}
            set={setLoguser}
          />
          <Button name="Log in" handle={handleLogin} />
          <br />
          <input
            type="button"
            className="setter not_Center"
            value="Create Account"
            onClick={(e) => {
              e.preventDefault();
              setLogin(false);
            }}
          ></input>
        </form>
      )}
      {!login && (
        <form action="get" className="pt-5 not_Center">
          <Input name="Name" type="text" func={user.Name} set={setUser} />
          <Input name="Email" type="email" func={user.Email} set={setUser} />
          <Input
            name="Password"
            type="password"
            func={user.Password}
            set={setUser}
          />
          <Button name="SignUp" handle={handleSignUp} />
          <input
            type="button"
            className="setter not_Center"
            value="Already Have Account"
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
            }}
          ></input>
        </form>
      )}
      {msg.length === 0 ? <Error msg /> : <div></div>}
    </div>
  );
};

export default Login;
