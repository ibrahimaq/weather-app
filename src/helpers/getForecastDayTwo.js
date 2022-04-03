//forecast for tomorrow + 1
import getWeekday from "./getWeekday";
import {iconArr} from "./getIconArr";

const getForecastDayTwo = (forecastDayTwo) => {
  const state = forecastDayTwo.day.condition.text;
  const keys = Object.keys(iconArr[0]);
  let icon;

  keys.map((text) => {
    if (state.includes(text)) {
      icon = iconArr[0][text].icon;
    }
    return icon;
  });

  return {
    weatherState: forecastDayTwo.day.condition.text,
    maxTemp: Math.round(forecastDayTwo.day.maxtemp_c),
    minTemp: Math.round(forecastDayTwo.day.mintemp_c),
    wind_mph: Math.round(forecastDayTwo.day.maxwind_mph),
    avghumidity: forecastDayTwo.day.avghumidity,
    uv: forecastDayTwo.day.uv,
    sunrise: forecastDayTwo.astro.sunrise,
    sunset: forecastDayTwo.astro.sunset,
    weekday: getWeekday[2],
    icon: icon,
  };
};

export default getForecastDayTwo;
