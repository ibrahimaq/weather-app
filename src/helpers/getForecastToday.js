//forecast for today

import getWeekday from "./getWeekday";
import {iconArr} from "./getIconArr";

const getForecastToday = (forecastToday) =>{
  
    //find suitable icon for weatherState
    const state = forecastToday.day.condition.text; //getting weather state from data
    const keys = Object.keys(iconArr[0]); //converting iconsArr object into an array so we can iterate over it
    let icon; //initialising variable to store icon's name

    //we check to see if the weather state includes any of the IconArr keys. If true we set the icon to that key:value
    //from the getIconArr
    keys.map(text =>{
        if(state.includes(text)){
            icon = iconArr[0][text].icon;
        }
        return icon; //return icon
    });
    

    return({
    weatherState: forecastToday.day.condition.text,
    maxTemp: Math.round(forecastToday.day.maxtemp_c),
    minTemp: Math.round(forecastToday.day.mintemp_c),
    wind_mph: Math.round(forecastToday.day.maxwind_mph),
    avghumidity: forecastToday.day.avghumidity,
    uv: forecastToday.day.uv,
    sunrise: forecastToday.astro.sunrise,
    sunset: forecastToday.astro.sunset,
    weekday: getWeekday[0],
    icon: icon
})
}

export default getForecastToday;