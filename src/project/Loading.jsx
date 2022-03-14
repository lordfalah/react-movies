import React from "react";
import { useRecoilState } from "recoil";
import { loadingData } from "../store/stateManage";

const Loading = () => {
  const [load] = useRecoilState(loadingData);

  return (
    <>
      {load ? (
        <span
          className="animate-ping font-semibold 
        text-2xl md:text-3xl"
        >
          Loading...
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
