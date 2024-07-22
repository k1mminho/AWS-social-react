import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export const getPosts = async () => {
  const res = await axios.get("/post");
  return res.data;
};
export const getPost = async (postId: string) => {
  const res = await axios.get(`/post/${postId}`);
  return res.data;
};


