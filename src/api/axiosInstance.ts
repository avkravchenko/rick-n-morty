import axios from "axios";

export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
