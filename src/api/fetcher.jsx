import axios from "axios";

// const musicApi = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_MUSIC_API_URL,
// });

export const fetcher = async (url) => {
  const res = await axios.get(url);

  return res.data;
};
