import { useContext, useEffect, useState } from "react";
import { getAllUser, addUser } from "../api/users";
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

  return { user, addUsers };
};

export default useUser;
