import React,{ChangeEvent, useState} from 'react'
import HomeTown from './HomeTown'
import PlaceModule from './PlaceModule'

type Props = {}
const api={
  key: 'ba6d7b60dd9d3f68e6880210d2ab6eb8',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export default function WeatherForecast({}: Props):JSX.Element {
  const[location, setLocation]=useState<string>('');
  const onInputChange=(e: ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    setLocation(value)
    }

const getSearchOptions=(value: string)=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api.key}`)
    
  }
  return (<>
   
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className='w-full md: max-w-[500px] p-4 flex flex-col text-center items-center justify-center md-px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700'>
        <h1 className='text-4xl font-sans '>Weather <span className='font-black'>  Forecast</span></h1>
        
      <p>
      this is the App page. <br />
      URL:https://www.youtube.com/watch?v=6MKFKwwhbNo
      Continuity from: time 36:00.

      </p>
     
      <div className='flex mt-10 md:mt-4'>
      <input type="text" value={location} onChange={onInputChange} className=' rounded-l-md py-1 px-2 rounded-1-md border-1 border-white' />
      <button className='py-1 px-2 rounded-r-md bg-transparent hover:bg-green-7 00 text-black font-semibold hover:text-white border border-black hover:border-transparent '>Search</button>

      </div>

    
        < HomeTown/>
        <PlaceModule/>
        </section>
      
    </main>
  
  </>
  )
}