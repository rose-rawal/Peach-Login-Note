import axiosInstance from "./axiosInstance";
const getAllUser=async ()=>{
    const users=await axiosInstance.get('allUser');
    return users.data;
}
export default getAllUser;