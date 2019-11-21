import axios from "axios";
import getCookie from "./getCookie";

export default axios.create({
  headers: { Authorization: getCookie("Authorization") }
});
