import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export const getGroupChatroom = async () => {
  const res = await axios.get("/groupChatroom");
  return res.data;
};

export const postGroupChatroom = async (body: {}) => {
  const res = await axios.get("/groupChatroom/Post", body);
  return res.data;
};
