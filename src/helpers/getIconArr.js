import blizzard from "../images/blizzard.jpg"
import clear from "../images/clear.jpg"
import cloudy from "../images/cloudy.jpg"
import mist from "../images/mist.jpg"
import partlyCloudy from "../images/partly-cloudy.jpg"
import rain from "../images/rain.jpg"
import snow from "../images/snow.jpg"
import sun from "../images/sun.jpg"
import thundery from "../images/thundery.jpg"
import cloudMoon from "../images/cloudMoon.jpg"

const iconArr = [
  {
    Sunny: { icon: "sun", image: sun },
    Clear: { icon: "moon", image: clear },
    Cloudy: { icon: "cloud", image: cloudy },
    "Partly cloudy": { icon: "cloud-sun", image: partlyCloudy },
    Overcast: { icon: "cloud", image: cloudy },
    Mist: { icon: "smog", image: mist },
    drizzle: { icon: "cloud-rain", url: rain },
    rain: { icon: "cloud-rain", image: rain },
    Torrential: { icon: "cloud-showers-heavy", image: rain },
    Thundery: { icon: "bolt", image: thundery },
    sleet: { icon: "cloud-rain", image: rain },
    snow: { icon: "snowflake", image: snow },
    pellets: { icon: "cloud-rain", image: rain },
    Blizzard: { icon: "cloud-rain", image: blizzard },
  },
];


export {iconArr, cloudMoon};
