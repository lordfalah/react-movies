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
        className={`rounded-full h-6 sm:h-7 transition-colors duration-100 ${
          dataTheme.cekBtn ? "bg-white" : "bg-black"
        }
     w-16 sm:w-20 relative flex items-center `}
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
        <label
          htmlFor="theme"
          className={`transition-all rounded-full p-1 sm:p-2 cursor-pointer
          shadow-inner mt-1
          ${
            dataTheme.cekBtn
              ? "translate-x-8 sm:translate-x-10 bg-black shadow-slate-100"
              : "translate-x-0 bg-white shadow-slate-800/40"
          }`}
        >
          {dataTheme.cekBtn ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 
                0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 
            12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 
            0l-.707.707M6.343 17.657l-.707.707M16 
            12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </label>
      </div>
    </div>
  );
};

export default ChangeTheme;
