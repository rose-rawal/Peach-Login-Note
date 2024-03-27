import { useContext, useEffect, useState } from "react";
import { getAllUser, addUser, login } from "../api/users";
import context from "../components/context/maincontext";
const useUser = () => {
  const [user, setUser] = useState([]);
  const { setUsers } = useContext(context);
  useEffect(() => {
    getAllUser().then((res) => {
      setUser(res);
      setUsers(res);
    });
  }, []);

  const addUsers = async (data) => {
    const res = await addUser(data);
    return res;
  };

  const loginUser = async (data) => {
    const res = await login(data);
    return res;
  };
  return { user, addUsers, loginUser };
};

export default useUser;
