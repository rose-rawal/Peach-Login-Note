import axios from "axios";
// http://192.168.254.4:3000

const axiosInstance=axios.create({
    baseURL:"https://peach-chat.onrender.com/"
})
export default axiosInstance;