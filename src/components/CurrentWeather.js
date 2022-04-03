import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CurrentWeather = ({ forecastToday }) => {
  const {
    name,
    region,
    date,
    weatherState,
    chanceOfRain,
    temperature,
    humidity,
    wind_mph,
    feelslike_c,
    
  } = forecastToday;

  

  //we can use is-day? to set styling e.g. white text on black background.
  //this can be achieved by creating a an object with respective styling before passing it as inline styles
  //e.g. style={customStyle} where if(is_day==0){customStyle.textColor = "white"} else {custom}
  // const [color, setColor] = useState("#fff");

  return (
    <div className="forecastToday container-fluid">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 location mx-0 px-0">
            {name}, {`${region} `}
            <FontAwesomeIcon icon="location-dot" />
          </div>
          <div className="col-12 date mt-2">{date}</div>
        </div>
        <div className="row">
          <div className="col-12"></div>
          <div className="col-12 ">
            <div className="temp fw-bold">
              {temperature}
              <span>°</span>
            </div>
          </div>
        </div>
        <div className="row ">
          <p className="feelsLike m-0">Feels like {feelslike_c}°</p>
          <p className="weatherState my-3 fw-bold">{weatherState}</p>
        </div>

        <div className="row mt-3">
          <div className="col-4">
            <div className="icon-wind">
              <FontAwesomeIcon icon="wind" />
            </div>
            <div className="wind-speed fw-bold my-2">{wind_mph} mph</div>
            <div className="misc-title">Wind</div>
          </div>
          <div className="col-4">
            <div className="icon-">
              <FontAwesomeIcon icon="droplet" style={{fontSize:".75rem"}} /><FontAwesomeIcon style={{position: "relative",transform: "translateY(-50%)", fontSize:".9rem"}} icon="droplet" /><FontAwesomeIcon icon="droplet" style={{position: "relative",transform: "translateY(25%)"}} />
            </div>
            <div className="chanceOfRain fw-bold my-2">{chanceOfRain} %</div>
            <div className="misc-title">Chance of rain</div>
          </div>
          <div className="col-4">
            <div className="icon-humidity">
              <FontAwesomeIcon icon="droplet" />
            </div>
            <div className="humidity-level fw-bold my-2">{humidity} %</div>
            <div className="misc-title">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
