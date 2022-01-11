import React, { useState, useEffect } from 'react';
import './css/App.css';

function App() {
  const [zip, setZip] = useState();

  const getCurrentWeather = () => {
    let url = "api.openweathermap.org/data/2.5/weather?id=" + zip + "&appid=" + process.env.REACT_APP_WEATHER_API_KEY;
  }
  return (
    <div className="App">
      Weather App
    </div>
  );
}

export default App;
