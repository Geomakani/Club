import axios from "axios";

const serverURL = "localhost";
const serverPort = 4444;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: `http://${serverURL}:${serverPort}/api/v1/`,
  // headers,
});

export default instance;
