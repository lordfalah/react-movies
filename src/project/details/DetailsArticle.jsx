import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { unixIdDataState } from "../../store/stateManage";

const DetailsArticle = () => {
  const [unixData, setUnixData] = useRecoilState(unixIdDataState);
  const throwLink = useNavigate("");
  const { keyId } = useParams(null);

  useEffect(() => {
    if (unixData.imdbID === keyId) {
      return true;
    } else {
      return throwLink("/");
    }
  }, [keyId, throwLink, unixData.imdbID]);

  console.log(unixData);

  return (
    <div
      className="fixed bg-black/70 top-0 bottom-0 left-0 right-0
      z-10 flex"
    >
      <div
        className="backdrop-blur-sm bg-slate-500/40 dark:bg-slate-800 w-11/12 p-3 
      sm:p-4 m-auto rounded-lg relative lg:py-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 absolute -top-8 left-1/2 -translate-x-1/2
          fill-red-500 stroke-2 stroke-slate-500/40 hover:stroke-white
          dark:stroke-slate-800 cursor-pointer transition-colors
          dark:hover:stroke-white
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => setUnixData({})}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div className="aspect-video lg:aspect-[7/3] block sm:grid sm:gap-4 sm:grid-cols-2 ">
          <div
            style={{
              backgroundImage: `url("${
                unixData.Poster !== "N/A"
                  ? unixData.Poster
                  : "https://source.unsplash.com/1000x600?notFound"
              }")`,
            }}
            className="w-full h-full bg-no-repeat bg-cover lg:bg-contain
             bg-center rounded-md"
          ></div>

          <div className="text-white">
            <h2 className="text-3xl my-5 text-center font-semibold">
              Information Details
            </h2>

            <table
              className="border-collapse border-2 border-slate-600 w-full
              text-xl font-normal"
            >
              <thead>
                <tr>
                  <th className="border p-2 border-slate-600 ...">Category</th>
                  <th className="border p-2 border-slate-600 ...">Film</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-1 font-semibold border-slate-700 ...">
                    Title
                  </td>
                  <td className="border p-1 border-slate-700 ...">
                    {unixData.Title}
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 font-semibold border-slate-700 ...">
                    Type
                  </td>
                  <td className="border p-1 border-slate-700 ...">
                    {unixData.Type}
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 font-semibold border-slate-700 ...">
                    Years
                  </td>
                  <td className="border p-1 border-slate-700 ...">
                    {unixData.Year}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsArticle;
