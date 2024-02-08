import { useEffect, useState } from "react";
import { NavLink, useParams, } from "react-router-dom";
import styles from '../stylesheets/Detail.module.css';

const apiKey = 'b10377933e04421eddbadea2dd65fc9f';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

const Kelvin = 273.15;
const Detail = () => {
const { lat, lon } = useParams();
const [detailWeather, setDetailWeather] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const weatherId = async () =>{

      try {
        const response =await fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();

          setLoading(false);
          setDetailWeather(data);
      } catch (error) {
        alert('City not found ')
      }
    }
    if ( lat && lon ){
      weatherId()
    }
  },[lat, lon])


  return (
    loading ? (<div>Loading...</div>) : (
      <div className={styles.detailContainer}>
        <span className={styles.nameCity}>
        <h2>{detailWeather.name}, {detailWeather.sys.country}</h2>
        </span>

        <div className={styles.mainWeather}>
          <img
            className={styles.iconWeather}
            src={`https://openweathermap.org/img/wn/${detailWeather?.weather[0]?.icon}@2x.png`}
            alt={detailWeather?.name}
          />
        </div>

        <li>
          <span className={styles.mainTemperature}>
          <h3><b>Temperature: </b>{parseInt(detailWeather?.main?.temp - Kelvin)}<sup>°C</sup></h3>
          </span>

          <p><b>Description: </b>{detailWeather?.weather[0]?.description}</p>
        </li>

        <div className={styles.moreInfo}>
          <li>
              <ul>
                <p>
                  <b>Feels like:</b> { parseInt( detailWeather?.main?.feels_like - Kelvin )}
                  <sup>°C</sup>
                </p>
              </ul>              <ul>
                <p>
                  <b>Temperature min:</b> { parseInt( detailWeather?.main?.temp_min - Kelvin )}
                  <sup>°C</sup>
                </p>
              </ul>              
              <ul>
                <p>
                  <b>Temperature max:</b> { parseInt( detailWeather?.main?.temp_max - Kelvin )}
                  <sup>°C</sup>
                </p>
              </ul>
          </li>
          <li>
              <ul>
                <p>
                  <b>Humidity:</b> {detailWeather?.main?.humidity}%
                </p>
              </ul>              <ul>
                <p>
                  <b>Wind:</b> {detailWeather?.wind?.speed}km/h
                </p>
              </ul>              <ul>
                <p>
                  <b>Cloud cover:</b> {detailWeather?.clouds?.all}%
                </p>
              </ul>
          </li>
        </div>

        <NavLink to={"/"}>
          <button className={styles.backButton}>
            Back
          </button>
        </NavLink>
      </div>
    )
  );
};

export default Detail;

