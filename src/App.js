import React, { useState, useEffect } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Current from './components/Current.jsx';

function App() {
  const [zip, setZip] = useState("");
  const [current, setCurrent] = useState(null);
  const [weatherType, setWeatherType] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setWeatherType("current");
    console.log(current);
  }

  useEffect(() => {
    if (zip && zip.length === 5) {
      const url = new URL("https://api.openweathermap.org/data/2.5/weather")
      url.searchParams.append("appid", process.env.REACT_APP_WEATHER_API_KEY)
      url.searchParams.append("zip", zip)
      url.searchParams.append("units", "imperial")
      fetch(url).then(res => res.json()).then(obj => setCurrent(obj))
    }
    else{
      alert("enter a valid zipcode");
    }
  }, [zip]);

// const getCurrentWeather = () => {
//   setWeatherType("current");
//   if (zip) {
//     let url = "api.openweathermap.org/data/2.5/weather?id=" + zip + "&appid=" + process.env.REACT_APP_WEATHER_API_KEY;
//     fetch(url).then(cw => {
//       return cw.json();
//     }).then(obj => {
//       if (obj.cod === 200){
//         setCurrent(obj);
//       }
//     });
//   }
// }

  return (
    <div className="App">
      <br/>
      <div className="card border-primary app-header">
        <div className="card-body">Weather by Ryan</div>
      </div>

      <br/>
      <form onSubmit={handleSubmit}>
        <input id="standard-basic" type="text" value={zip} placeholder="Zipcode" onChange={e => setZip(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Get Current Weather</button>
      </form>
      <b/>
      {weatherType === "current" && current &&
        <>
          <h3>City: {current.name}</h3>
          <h3>{current.weather[0].description}</h3>
          <h3>Temp: {current.main.temp} degrees F</h3>
          <h3>Wind: {current.wind.speed} mph</h3>
        </>
      }
    </div>
  );
}

export default App;
