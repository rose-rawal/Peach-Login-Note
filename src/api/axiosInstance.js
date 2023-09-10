import axios from "axios";
const axiosInstance=axios.create({
    baseURL:"https://peach-chat.onrender.com/"
})
export default axiosInstance;