import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://localhost:4200/api/v1",
  withCredentials: true,
  headers: {
    // 'Access-Control-Allow-Origin': 'http://localhost:5173',
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});
