import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "https://wunderlist-2-0-be.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
