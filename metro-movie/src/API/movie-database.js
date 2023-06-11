import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const api_key = "cc4eb3d4b709c3a70d2b7ad5bd517138";

export async function get_now_playing() {
  return axiosInstance.get("movie/now_playing", {
    params: { api_key },
  });
}

export async function get_genres() {
  return axiosInstance.get("genre/movie/list", {
    params: { api_key },
  });
}

export async function get_upcoming() {
  return axiosInstance.get("movie/upcoming", {
    params: { api_key },
  });
}

export async function get_search(query) {
  return axiosInstance.get("search/movie", {
    params: { api_key: api_key, query: query },
  });
}
