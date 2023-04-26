import React, { useEffect, useState } from "react";

import "./App.css";
import { ITempResp, ErrorHandle } from "./utils/type";


const api = {
  key: "ba6d7b60dd9d3f68e6880210d2ab6eb8",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState<string>("");
  const [situations, setSituation] = useState<ITempResp>();
  const [err,setErr]=useState<ErrorHandle>()

  const handleSearch = () => {
    console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(async (res) => await res.json())
      .then((result) => {
        if (result?.cod !==200){
          setErr(result);
     }
        else{
          setSituation(()=>result);
        }
      });
  };
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    {
      handleSearch;
    }
  };



  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
     
      <div>
        <h1 className="text-4xl font-sans mr-4 ">
          Weather <span className="font-black"> Forecast</span>
        </h1>
      </div>
      <div className="w-3/6 md: max-w-[500px] p-4 flex flex-col text-center items-center justify-center  lg:p-24 h-64 lg:h-[500px] bg-white bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <form onSubmit={handleForm}>
          <input
            className=" rounded-l-md py-1 px-2 rounded-1-md border-1 border-white"
            type="text"
            placeholder="Enter location"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="py-1 px-2 rounded-r-md bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white border border-black hover:border-transparent "
            onClick={handleSearch}
          >
            Search
          </button>
        </form>

        {situations && <div className=" text-xl">
          <p className=" py-1 px-2  text-2xl">{situations?.name}</p>
          <p className="items-center justify-end">
            <img
              className="items-center justify-center"
              src={`https://openweathermap.org/img/wn/${situations?.weather[0]?.icon}@2x.png`}
              alt="Weather Icon"
            />
          </p>
          Temperature: <span> {situations?.main?.temp}</span>°C
          
      <br />
            Weather: <span> {situations?.weather[0]?.main}</span>
            <p> {situations?.weather[0]?.description}</p>
        </div>}
        {err && <div>Error</div>}
      </div>
    </div>
  );
}

export default App;
