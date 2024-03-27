import axiosInstance from "./axiosInstance";
const getAllUser = async () => {
  const res = await axiosInstance.get("allUser");
  return res.data;
};
const addUser = async ({ Name, Email, Password }) => {
  const res = await axiosInstance.post("addUser", {
    Name,
    Email,
    Password,
  });
  return res.data;
};

const login = async ({ Name, Password }) => {
  const res = await axiosInstance.post("login", {
    Name,
    Password,
  });
  return res.data;
};

export { getAllUser, addUser, login };
