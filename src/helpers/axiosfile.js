import axios from "axios";
const axiosFile = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});


export default axiosFile;