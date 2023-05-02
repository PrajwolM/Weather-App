import React, { useState } from "react";

import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  const [search, setSearch] = useState<string>("");
  const [places, setPlaces] = useState<string[]>(["kathmandu"]);
  const handleAddPlace = (location: string) => {
    if (places.length < 3) {
      const changePlace = [...places, location];
      setPlaces(changePlace);
    } else {
      alert("Only 3 places can be shown simultaneously");
    }
  };
  const handleRemovePlace = (index: number) => {
    const changePlace = [...places];
    changePlace.splice(index, 1);
    console.log(changePlace);
    setPlaces(changePlace);
  };
  return (
    <div className="flex  flex-col  bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] ">
      <div className="flex flex-row justify-center">
        <h1 className="text-5xl mx-32 my-3 font-sans  ">
          Weather<span className="font-black">Forecast</span>
        </h1>
        <div className="my-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(search);
              handleAddPlace(search);
            }}
          >
            <input
              className=" rounded-l-md py-1 px-2 rounded-1-md border-1 border-white"
              type="text"
              placeholder="Enter location"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="py-1 px-2 rounded-r-md bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white border border-black hover:border-transparent "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <br />
      <div className=" mx-2 grid grid-cols-3 w-full">
        {places.map((element, index) => {
          return (
            <div key={element}>
              <Homepage
                name={element}
                index={index}
                handleRemoval={handleRemovePlace}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
