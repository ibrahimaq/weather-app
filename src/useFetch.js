import { useState } from "react";
import getCurrentWeather from "./helpers/getCurrentWeather";
import getForecastToday from "./helpers/getForecastToday";
import getForecastDayOne from "./helpers/getForecastDayOne";
import getForecastDayTwo from "./helpers/getForecastDayTwo";
import getHourlyForecastToday from "./helpers/hourlyWeather/getHourlyForecastToday";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [gotData, setGotData] = useState(false);
  const [forecast, setForecast] = useState({});



  const getWeather = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
      );
      if (response.status === 400) {
        
        throw new Error(
          `Error ${response.status}. No such location.`
        );
      }
      else if(!response.ok){
        throw new Error(
        `Error ${response.status}.`
        );
      }
      const data = await response.json();
      
      ///// extract current weather state //////
       
      gatherWeatherData(data)
      setGotData(true);
      setIsLoading(false);
      setIsError(false);
      
    } catch (err) {
      console.log(err);
      setIsError(err.message);
    }
    
    
  };

 
  //splitting data into objects by running it through helper function which return objects
  const gatherWeatherData = (data) =>{
    const currentWeather = getCurrentWeather(data.current, data.location.name, data.location.country, data.forecast.forecastday[0].day.daily_chance_of_rain, data.location.tz_id);
    const forecastToday = getForecastToday(data.forecast.forecastday[0]);
    const forecastDayOne = getForecastDayOne(data.forecast.forecastday[1]);
    const forecastDayTwo = getForecastDayTwo(data.forecast.forecastday[2]);

    //hourly forecast
    const hourlyForecastToday = getHourlyForecastToday(data.forecast.forecastday[0].hour, data.forecast.forecastday[1].hour, data.location.tz_id);
    
    
    const dailyForecastArr = [forecastToday, forecastDayOne, forecastDayTwo]; //placed in an array allows us to iterate over them easier when rendering
    setForecast({currentWeather, forecastToday, forecastDayOne, forecastDayTwo, dailyForecastArr, hourlyForecastToday});
  }
  


  return { isLoading, isError, forecast, gotData, getWeather};
};

export default useFetch;

