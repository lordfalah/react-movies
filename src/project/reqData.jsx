import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataImdb, loadingData, titleText } from "../store/stateManage";

const ReqData = () => {
  const [, setDataRequest] = useRecoilState(dataImdb);
  const [dataText, setDataText] = useRecoilState(titleText);
  const [, setLoad] = useRecoilState(loadingData);

  useEffect(() => {
    const testing = async () => {
      if (dataText.text.length > 0) {
        setLoad("Loading....");
        try {
          const dataApi = await fetch(
            `http://www.omdbapi.com/?apikey=2669750a&s=${dataText.text}`
          );
          const response = await dataApi.json();
          setDataRequest(response.Search);

          setLoad("");
        } catch (err) {
          console.log(err.message);
        }
      } else {
        setDataRequest([]);
      }
    };

    testing();
  }, [dataText.text, setDataRequest, setLoad]);

  return (
    <div className="max-w-lg mt-7 mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-5 justify-center items-center"
      >
        <input
          type="text"
          placeholder="title..."
          className="h-14 border-none focus:ring-4 focus:outline-none 
        dark:focus:ring-slate-700 rounded-full bg-black text-white
          w-full dark:shadow-md dark:shadow-slate-700 p-5 
          focus:ring-slate-400"
          onChange={(e) => setDataText({ text: e.target.value })}
        />

        <a href="#cards" className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 
              1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </form>
    </div>
  );
};

export default ReqData;
