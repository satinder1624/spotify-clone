import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState", // unique ID (with respect to other atoms/selectors)
  default: "3bE0wuBy8vn4y8iTpK3oyf", // default value (aka initial value)
});
