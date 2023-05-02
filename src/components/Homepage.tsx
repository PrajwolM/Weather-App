import React, { useEffect, useState } from "react";
import { ITempResp } from "../utils/type";

type places = {
  name: string;
  index: number;
  changePlace: (location: string, index: number) => void;
};
export default function Homepage(props: places) {
  const api = {
    key: "ba6d7b60dd9d3f68e6880210d2ab6eb8",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [homeInfo, setHomeInfo] = useState<ITempResp>();
  const [search, setSearch] = useState<string>("");
  console.log(props.name);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&units=metric&APPID=${api.key}`
    )
      .then(async (res) => await res.json())
      .then((result) => {
        setHomeInfo(() => result);
      });
  }, [props.name]);
  return (
    <div className="w-full  md:max-w-[479px] p-3 flex flex-col text-center   lg:p-24 h-64 lg:h-[500px] bg-white bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(search);
          props.changePlace(search, props.index);
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

      {homeInfo && (
        <div className=" text-xl">
          <p className=" py-1 px-2  text-2xl">{homeInfo?.name}</p>
          <p className="relative left-10">
            <img
              className="relative  left-[4rem]"
              src={`https://openweathermap.org/img/wn/${homeInfo?.weather[0]?.icon}@2x.png`}
              alt="Weather Icon"
            />
          </p>
          Temperature: <span> {homeInfo?.main?.temp}</span>°C
          <br />
          Weather: <span> {homeInfo?.weather[0]?.main}</span>
          <p> {homeInfo?.weather[0]?.description}</p>
        </div>
      )}
    </div>
  );
}
