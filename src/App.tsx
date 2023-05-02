import React, { useState } from "react";

import "./App.css";
// import { ITempResp, ErrorHandle } from "./utils/type";
import Homepage from "./components/Homepage";

function App() {
  // const [search, setSearch] = useState<string>("");
  // const [situations, setSituation] = useState<ITempResp | null>();
  // const [err, setErr] = useState<ErrorHandle | null>();
  // const handleSearch = () => {
  //   fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
  //     .then(async (res) => await res.json())
  //     .then((result) => {
  //       if (result?.cod !== 200) {
  //         setErr(result);
  //         setSituation(null);
  //       } else {
  //         setSituation(() => result);
  //         setErr(null);
  //       }
  //     });
  // };

  // const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   handleSearch();
  // };
  // const addLocation = () => {
  //   locations.push(search);
  //   console.log(locations);
  // };
  const [places, setPlaces] = useState<string[]>([
    "kathmandu",
    "banepa",
    "bhaktapur",
  ]);
  const handleChangePlace = (location: string, index: number) => {
    const changePlace = [...places];

    changePlace[index] = location;
    setPlaces(changePlace);
    console.log(places);
  };

  return (
    <div className="flex space-y-7 flex-col  bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] ">
      <div className=" justify-center">
        <h1 className="text-5xl  font-sans  top-5 left-5">
          Weather<span className="font-black">Forecast</span>
        </h1>
      </div>
      <br />
      <div className=" mx-2 grid grid-cols-3 w-full">
        {places.map((element, index) => {
          return (
            <div key={element}>
              <Homepage
                name={element}
                index={index}
                changePlace={handleChangePlace}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

{
  /* <div>
          <Homepage />
        </div>
        <div className="w-full  md:max-w-[500px] p-4  text-center   lg:p-24 h-64 lg:h-[500px] bg-white bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
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

          {situations && (
            <div className=" text-xl">
              <p className=" py-1 px-2  text-2xl">{situations?.name}</p>
              <p className="relative left-10">
                <img
                  className="relative  left-[4rem]"
                  src={`https://openweathermap.org/img/wn/${situations?.weather[0]?.icon}@2x.png`}
                  alt="Weather Icon"
                />
              </p>
              Temperature: <span> {situations?.main?.temp}</span>°C
              <br />
              Weather: <span> {situations?.weather[0]?.main}</span>
              <p> {situations?.weather[0]?.description}</p>
            </div>
          )}
          {err && (
            <div>
              {err.cod} Error: <span>{err.message}</span>
            </div>
          )}
          <button
            className="py-1 px-2 absolute bottom-2 right-2  rounded-md bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white border border-black hover:border-transparent "
            onClick={addLocation}
          >
            Add location
          </button>
        </div> */
}
