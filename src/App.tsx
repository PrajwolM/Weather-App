import React, { useState } from "react";

import "./App.css";
import Homepage from "./components/Homepage";

function App() {
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
