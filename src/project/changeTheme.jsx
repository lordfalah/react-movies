import React from "react";
import { useRecoilState } from "recoil";
import { theme } from "../store/stateManage";

const ChangeTheme = () => {
  const [dataTheme, setDataTheme] = useRecoilState(theme);

  if (dataTheme.cekBtn) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  return (
    <div className="flex justify-end my-5">
      <div
        className="rounded-full h-7 bg-red-300
    w-14 relative cursor-pointer"
      >
        <input
          type="checkbox"
          className="absolute w-full h-full hidden"
          id="theme"
          defaultChecked={dataTheme.cekBtn}
          onChange={(e) =>
            setDataTheme({ ...dataTheme, cekBtn: e.target.checked })
          }
        />
        <label htmlFor="theme">
          <div className="bg-black rounded-full w-1/2 h-full"></div>
        </label>
      </div>
    </div>
  );
};

export default ChangeTheme;
