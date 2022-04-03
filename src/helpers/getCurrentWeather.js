import {iconArr, cloudMoon} from "./getIconArr";

const { DateTime } = require("luxon");



const getCurrentWeather = (currentWeather, locationName, locationRegion, chanceOfRain, timeZone) => {
  // const now = DateTime.now();
  const localTimeZone = DateTime.local().setZone(`${timeZone}`); //DATE object set to local time zone
  const dayAndMonth = localTimeZone.toLocaleString({ day: "numeric", month: "long" }); //getting local date
  const localTime_short= localTimeZone.toLocaleString(DateTime.TIME_24_SIMPLE); // getting local time
  
  const date = `${dayAndMonth}, ${localTime_short}`; // putting things together


  //setting background image according to weather state
  const state = currentWeather.condition.text;
  const isDay = currentWeather.is_day;
  
  const keys = Object.keys(iconArr[0]);

  let bgImage;

  keys.map((text) => {
    if(!isDay && state === "Partly cloudy"){
      bgImage = cloudMoon;
    }
    if (state.includes(text)) {
      bgImage = iconArr[0][text].image;
      
    }
    return bgImage;
  });

  return {
    name: locationName,
    date: date,
    region: locationRegion,
    weatherState: currentWeather.condition.text,
    chanceOfRain: chanceOfRain,
    temperature: Math.round(currentWeather.temp_c),
    humidity: currentWeather.humidity,
    wind_mph: Math.round(currentWeather.wind_mph),
    feelslike_c: Math.round(currentWeather.feelslike_c),
    uv: currentWeather.uv,
    background_image: bgImage
  };
};

export default getCurrentWeather;
