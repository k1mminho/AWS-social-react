import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

/**게시글 정보 불러오는 api */
export const getPosts = async () => {
  const res = await axios.get("/post/list");
  return res.data;
};

/**단일 게시글 불러오는 api */
export const getPost = async (postId: string) => {
  const res = await axios.get(`/post/${postId}`);
  return res.data;
};

/**글 작성 api */
export const postPost = async (body : {
  title : string,
  content : string
})=> {
  const res = await axios.get(`/post/write`)
}




