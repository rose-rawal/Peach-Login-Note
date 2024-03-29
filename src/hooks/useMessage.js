import { useContext, useEffect } from "react";
import { getAllMessage, addMessage } from "../api/messages";
import contex from "../components/context/datacontext";
const useMessage = () => {
  const { setAllMessage } = useContext(contex);
  useEffect(() => {
    const getz = async () => {
      const res = await getAllMessage();
      setAllMessage((n) => {
        return [...res];
      });
      console.log("waiting for message");
    };
    setInterval(() => {
      getz();
    }, 3000);
  }, [setAllMessage]);

  const getAll = async () => {
    return 0;
  };
  getAll();
  const putUser = async (val) => {
    const res = await addMessage(val);
    return res;
  };

  return { getAll, putUser };
};
export default useMessage;
