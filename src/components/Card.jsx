import { NavLink } from "react-router-dom";
import styles from "../stylesheets/Card.module.css";


function Card({ data }) {
  const Kelvin = 273.15;
  return (
    data && (
      <div className={styles.cardContainer}>
        <div className={styles.cardTitle}>
          <h2>{data?.name}, {data?.sys?.country}</h2>
        </div>
      <div className={styles.mainWeather}>
        <img
          className={styles.iconWeather}
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
          alt={data?.name}
        />
      </div>

      <li>
        <span className={styles.mainTemperature}>
        <h3><b>Temperature: </b>{parseInt(data?.main?.temp - Kelvin)}<sup>°C</sup></h3>
        </span>

        <p><b>Description: </b>{data?.weather[0]?.description}</p>
      </li>
      <span className={styles.buttonInfo}>
        <NavLink to={`/detail/${data.coord.lat}/${data.coord.lon}`}>
          <button className={styles.moreInfo} >
            ➕
          </button>
        </NavLink>
      </span>
    </div>
    )
  )
}

export default Card;
