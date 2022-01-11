import React, { useState, useEffect } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Current from './components/Current.jsx';

function App() {
  const [zip, setZip] = useState();
  const [current, setCurrent] = useState();
  const [weatherType, setWeatherType] = useState();

  const handleSubmit = () => {
    return getCurrentWeather();
  };

  const getCurrentWeather = () => {
    let url = "api.openweathermap.org/data/2.5/weather?id=" + zip + "&appid=" + process.env.REACT_APP_WEATHER_API_KEY;
    fetch(url).then(cw => {
      return cw.json();
    }).then(obj => {
      if (obj.cod === 200){
        setCurrent(obj);
      }
    });
    setWeatherType("current");
  }
  return (
    <div className="App">
      <br/>
      <div className="card border-primary app-header">
        <div className="card-body">Weather by Ryan</div>
      </div>

      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Zipcode" onChange={({target}) => setZip(target.value)}></input>
        <button type="submit">Get Current Weather</button>
      </form>

      {weatherType === "current" && current &&
        {current}
      }
    </div>
  );
}

export default App;
