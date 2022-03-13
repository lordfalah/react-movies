import React from "react";
import { useRecoilState } from "recoil";
import { dataImdb, unixIdDataState } from "../store/stateManage";
import { Link } from "react-router-dom";

const ShowMovie = () => {
  const [dataMovie] = useRecoilState(dataImdb);
  const [, setUnixData] = useRecoilState(unixIdDataState);

  return (
    <>
      {dataMovie === undefined || dataMovie.length === 0 ? (
        <p className="text-center mt-14 text-4xl font-bold">Movie Empty</p>
      ) : (
        <div
          className="mt-16 grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-3
        xl:grid-cols-4 dark:text-white justify-center"
        >
          {dataMovie.map((data, idx) => {
            return (
              <div
                key={idx}
                className="w-full aspect-square mb-10
              rounded-xl shadow-md shadow-slate-800/25
            "
              >
                <div
                  style={{
                    backgroundImage: `url("${
                      data.Poster !== "N/A"
                        ? data.Poster
                        : "https://source.unsplash.com/1000x600?notFound"
                    }")`,
                  }}
                  className="w-full h-full bg-no-repeat bg-cover bg-center
                overflow-hidden rounded-t-lg"
                ></div>

                <article className="p-5 bg-slate-200 dark:bg-black/30 rounded-b-lg">
                  <h2 className="font-serif font-semibold text-xl text tracking-wider">
                    {data.Type.toUpperCase()}
                  </h2>
                  <h3 className="text-2xl font-semibold font-rubik dark:text-[#ffffdd]">
                    {data.Title}
                  </h3>

                  <Link to={`/details/${data.imdbID}`}>
                    <button
                      type="button"
                      className="mt-5 text-xl font-medium dark:bg-black p-4 rounded-lg
                    dark:shadow-md dark:shadow-amber-100/50 dark:hover:bg-gray-900 
                    dark:hover:text-slate-100 bg-indigo-200 hover:bg-indigo-300
                    transition-all shadow-md shadow-slate-400"
                      onClick={() => setUnixData(data)}
                    >
                      Show Details...
                    </button>
                  </Link>
                </article>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowMovie;
