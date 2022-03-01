import { useState } from "react";

import useFetch from "./useFetch";
import Form from "./Form";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import HourlyForecastToday from "./components/HourlyForecastToday";
import getCurrentWeather from "./helpers/getCurrentWeather";

const Home = () => {
  // forecast returns: {currentWeather, forecastToday, forecastDayOne, forecastDayTwo, dailyForecastArr}
  const { gotData, getWeather, isLoading, isError, forecast } = useFetch();
  const [result, setResult] = useState(false);

  const submitSearch = (location) => {
    getWeather(location);
  };

  // if (!isLoading) {
  //   console.log(forecast);
  // }

  const styles = {
    gotDataTrue: {
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0, 0, 0, .6)), url(${ gotData ? forecast.currentWeather.background_image : ""})`,
      width: "100%",
      height: "100vh",
      overflowY: "scroll",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      

    },
    gotDataFalse: {
      backgroundImage: `radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )`,
      minHeight: "100vh",
      
    },
  };

  //   const apiKey = "9fdf38bfba2ef817be0cbd16ec202d94";
  // style={{backgroundImage: `url(${background_image})`}
  return (
    <div
      className="home"
      style={
        gotData ? styles.gotDataTrue : styles.gotDataFalse
      }
    >
      <Form submitSearch={submitSearch} result={result} gotData={gotData} />

      {isError && <div>Check spelling</div>}
      {!isLoading && (
        <div className="content">
          <CurrentWeather forecastToday={forecast.currentWeather} />
          <HourlyForecastToday hourlyForecast={forecast.hourlyForecastToday} />
          <DailyForecast dailyForecast={forecast.dailyForecastArr} />
        </div>
      )}
    </div>
  );
};

export default Home;
