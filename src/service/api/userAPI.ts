import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export const fetchLogin = async (body: any) => {
  const res = await axios.post("/login", body);
  return res.data;
};

export const fetchLogout = async () => {
  const res = await axios.post("/logout");
  return res.data;
};
// email duplicate check
export const checkedEmail = async (email: string) => {
  const res = await axios.post("/join/checkDuplicationEmail", { email });
  return res.data;
};
// email change
export const changedEmail = async () => {
  const res = await axios.get("/join/changedEmail");
  return res.data;
};
// email verify
export const verifyEmail = async (email: string) => {
  const res = await axios.post("/join/verifyEmail", { email });
  return res.data;
};
// join code
export const checkedCode = async (code: number) => {
  const res = await axios.post("/join/checkJoinCode", { code });
  return res.data;
}
// nickname duplicate check
export const checkNickname = async (nickname: string) => {
  const res = await axios.post("/join/checkDuplicationNickname", { nickname });
  return res.data;
}

export const changedNickname = async () => {
  const res = await axios.get("/join/changedNickname");
  return res.data;
}

export const fetchJoin = async (body: any) => {
  const res = await axios.post("/join", body);
  return res.data;
};












