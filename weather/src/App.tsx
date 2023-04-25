import React from 'react';

import './App.css';
import WeatherForecast from './components/WeatherForecast';

const api={
  key: 'ba6d7b60dd9d3f68e6880210d2ab6eb8',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      This is the App page.
      <WeatherForecast/>
    </div>
  );
}

export default App;
