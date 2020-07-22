import axios from "axios";

const api = axios.create({
  baseURL: "https://relirk-portfolio-api.herokuapp.com",
});

export default api;
