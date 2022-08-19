import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.35.49.115:8080/",
});
const token = localStorage.getItem("token");
instance.defaults.headers.common["authorization"] = token ? `${token}` : null;
export default instance;
