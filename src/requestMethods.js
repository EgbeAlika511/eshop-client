import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFlYWY5ZWVjOTNmODM4OGE3ZmRmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjY0NTg2MSwiZXhwIjoxNjg2NzMyMjYxfQ.kupVIzYqrAovawrC6pp-0CotNpcN-_wKU3A4OB--rgE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
