import { useState } from "react";
import SearchWeather from "./SearchWeather";
import Card from "./Card";
const apiKey = 'b10377933e04421eddbadea2dd65fc9f';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
import styles from '../stylesheets/Home.module.css';

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handlerChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (city.length > 1) fetchWeather();
    }

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${URL}?q=${city}&appid=${apiKey}`);
      const info = await response.json();
      // server code response
      if (info.cod === '404') {
        throw new Error ('City not found. Please try again');
      }
      setData(info);
    } catch (error) {
        window.alert(error.message);
    }
  };
  
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.webTitle}>
          <h1>Weather App</h1>
        </div>  
        <div className={styles.searchWeather}>
          <SearchWeather
            value={city}
            onChange={handlerChangeCity}
            onSubmit={handlerSubmit}
          />
        </div>
      </div>
      <div>
        <Card data={data} />
      </div>
    </div>
  );
};

export default Home;
