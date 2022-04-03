//forecast for tomorrow
import getWeekday from "./getWeekday";
import {iconArr} from "./getIconArr";
const getForecastDayOne = (forecastDayOne) => {
  const state = forecastDayOne.day.condition.text;
  const keys = Object.keys(iconArr[0]);
  let icon;

  keys.map((text) => {
    if (state.includes(text)) {
      icon = iconArr[0][text].icon;
    }
    return icon;
  });

  return {
    weatherState: forecastDayOne.day.condition.text,
    maxTemp: Math.round(forecastDayOne.day.maxtemp_c),
    minTemp: Math.round(forecastDayOne.day.mintemp_c),
    wind_mph: Math.round(forecastDayOne.day.maxwind_mph),
    avghumidity: forecastDayOne.day.avghumidity,
    uv: forecastDayOne.day.uv,
    sunrise: forecastDayOne.astro.sunrise,
    sunset: forecastDayOne.astro.sunset,
    weekday: getWeekday[1],
    icon: icon,
  };
};
export default getForecastDayOne;
