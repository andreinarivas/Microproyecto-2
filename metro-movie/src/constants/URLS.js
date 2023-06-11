export const HOME_URL = "/";

export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const MOVIE_DETAIL_URL = (movieid = ":movieid") => {
  return `/movie/${movieid}`;
};
export const PROFILE_URL = "/profile";
export const ADMIN_URL = "/admin";

export const RESERVE_URL = (movieid = ":movieid") => {
  return `/movie/${movieid}/reserve`;
};
