import { atom } from "recoil";

export const dataImdb = atom({
  key: "data",
  default: [],
});

export const theme = atom({
  key: "theme",
  default: {
    tema: "light",
    cekBtn: false,
  },
});

export const titleText = atom({
  key: "text",
  default: {
    text: "",
    data: false,
  },
});

export const unixIdDataState = atom({
  key: "unix",
  default: {},
});

export const loadingData = atom({
  key: "loading",
  default: "",
});

export const errorData = atom({
  key: "error",
  default: "",
});
