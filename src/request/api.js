import { get } from "./http";
export const getnewsong = function(p) {
  return get("/personalized/newsong", p);
};
export const getsonglist = function(p) {
  return get("/personalized", p);
};
