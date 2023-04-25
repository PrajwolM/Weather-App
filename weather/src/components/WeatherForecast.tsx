import React from 'react'
import HomeTown from './HomeTown'
import PlaceModule from './PlaceModule'

type Props = {}
const api={
    key: 'ba6d7b60dd9d3f68e6880210d2ab6eb8',
    base: 'https://api.openweathermap.org/data/2.5/'
  }
export default function WeatherForecast({}: Props) {
  return (<>
    <div>WeatherForecast</div>
    < HomeTown/>
    <PlaceModule/>
  
  </>
  )
}