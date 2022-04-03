import {iconArr} from "../getIconArr";

const { DateTime } = require("luxon");

/* 
// ##### the logic of hourly forecast #####//
    We need to render the hourly forecast starting from the client's time onwards for a period of 24 hours.
    Therefore we need the next day's forecast as welll.
    To do this we need to:
    1. get client's time in just hours e.g. 17 instead of 17:08
    2. join the two forecasts together in an array.
    3. use client's time, as index, to retrieve hourly forecast starting from that hour until index+24
    4. we also need to have the time for the next 24 hour so we can map over them and render timings for each hour.
        To do this we will insert the the next 24 hours into each hour object as hourlyTime
    5. return hourly forecast in an obejct to then be exported to its respective component
*/

// get current hour only e.g. 22 insted of 22:10, plus 1 hour so we display weather from the next hour
// const time = DateTime.now().plus({ hours: 1 }).toFormat("HH");

// const hour = Number(time);

const getHourlyForecastToday = (
  hourlyForecastToday,
  hourlyForecastTomorrow, timeZone
) => {
  //setting correct timezone
  const localTimeZone = DateTime.local().setZone(`${timeZone}`); 
  // get current hour only e.g. 22 insted of 22:10, plus 1 hour so we display weather from the next hour
  const localTime = localTimeZone.plus({hour: 1}).toFormat("HH"); 
  const hour = Number(localTime); //time is a string so must be converted to a number
  
  const TotalhourlyForecast = hourlyForecastToday.concat(
    hourlyForecastTomorrow
  ); //joined 48 hours together
  const hourlyForecast = TotalhourlyForecast.slice(hour, hour + 24);

  for (let i = 0; i < hourlyForecast.length; i++) {
    //adding creating a new key in hourlyForecast (time_hour) and attaching hours to it e.g. first object
    //will have time_hour: time now + 0 hour. Second object time_hour: time now + 1 hour. And so on.
    hourlyForecast[i].time_hour = `${localTimeZone
      .plus({ hours: 1 + i })
      .toFormat("HH")}:00`;

    //matching weather state to icon
    const state = hourlyForecast[i].condition.text;
    const is_day = hourlyForecast[i].is_day;

    const keys = Object.keys(iconArr[0]);
    let icon;

    keys.map((iconArrKey) => {
      //Partly cloudy may include sun or moon - here we are setting icon explicitly depending on day or night
      if (state.includes("Partly cloudy") && !is_day) {
        icon = "cloud-moon";
      } else if (state.includes(iconArrKey)) {
        icon = iconArr[0][iconArrKey].icon;
      }
      return icon;
    });

    hourlyForecast[i].icon = icon;
  }

  return hourlyForecast;
};

export default getHourlyForecastToday;
