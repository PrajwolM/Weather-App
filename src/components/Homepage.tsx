import React, { useEffect, useState } from "react";
import { ITempResp, ErrorHandle } from "../utils/type";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

type places = {
  name: string;
  index: number;
  handleRemoval: (index: number) => void;
};
export default function Homepage(props: places) {
  const { isOpen, toggle } = useModal();
  const api = {
    key: "ba6d7b60dd9d3f68e6880210d2ab6eb8",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [homeInfo, setHomeInfo] = useState<ITempResp | null>(null);
  const [err, setErr] = useState<ErrorHandle | null>(null);
  console.log(props.name);
  const removePlace = (index: number) => {
    props.handleRemoval(index);
    console.log("removed");
  };
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&units=metric&APPID=${api.key}`
    )
      .then(async (res) => await res.json())
      .then((result) => {
        if (result?.cod !== 200) {
          setErr(result);
          setHomeInfo(null);
        } else {
          setHomeInfo(() => result);
          console.log(result);
          setErr(null);
        }
      });
  }, [props.name]);
  return (
    <div className="w-full  md:max-w-[450px] p-3 flex flex-col    lg:p-24 h-64 lg:h-[500px] bg-white bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
      <div className=" text-right ">
        <button onClick={() => removePlace(props.index)}>🗙</button>
      </div>
      {homeInfo && (
        <div className=" text-xl text-center">
          <p className=" py-1 px-2  text-2xl">{homeInfo?.name}</p>
          <p className="relative left-6">
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
          <div>
            <div className="text-4xl  ">
              <button className="text-center" onClick={toggle}>
                →
              </button>
            </div>
            <Modal isOpen={isOpen} toggle={toggle}>
              <div className="text-white">
                <div className="text-center">
                  {homeInfo?.name}, {homeInfo?.sys?.country}
                  <br />
                  <img
                    className="relative  left-[4rem]"
                    src={`https://openweathermap.org/img/wn/${homeInfo?.weather[0]?.icon}@2x.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="text-left">
                  Coordinates:
                  <br /> Lon:{homeInfo?.coord.lon} Lat:
                  {homeInfo?.coord.lat}
                  <br /> weather: {homeInfo?.weather[0]?.main}
                  <br />
                  Description: {homeInfo?.weather[0]?.description}
                  <br />
                  Temperature:{homeInfo?.main?.temp}
                  <br />
                  Humidity: {homeInfo.main.humidity}
                  <br />
                  Pressure: {homeInfo.main.pressure}
                  <br />
                  Visibility: {homeInfo.visibility}
                  <br />
                  Wind: {homeInfo.wind.speed}
                  <br />
                  TimeZone: {homeInfo.timezone}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}

      {err && (
        <div>
          {err?.cod} Error: {err.message}
        </div>
      )}
    </div>
  );
}
