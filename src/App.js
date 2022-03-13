import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import DetailsArticle from "./project/details/DetailsArticle";
import Home from "./project/Home";

function App() {
  const getBody = useRef(null);

  useEffect(() => {
    getBody.current.parentElement.parentElement.parentElement.classList.add(
      "dark:bg-zinc-800",
      "dark:text-white",
      "bg-white",
      "text-black"
    );
  }, [getBody]);

  return (
    <div
      className="App 
      h-full scroll-smooth"
    >
      <header className="App-header" ref={getBody}></header>

      <section>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="details/:keyId" element={<DetailsArticle />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
