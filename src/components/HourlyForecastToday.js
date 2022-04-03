import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HourlyForecastToday = ({hourlyForecast}) => {

    

    return ( 
        <div id="hourlyForecast" className="container-fluid px-0 my-5 text-center">
            <div className="container">
            <div className="row flex-nowrap">
                {hourlyForecast.map((hour, index) => (
                    <div className="col-3 d-flex flex-column py-2 hourly-item " key={index} >
                        <span className="hourly-time">{hour.time_hour}</span>
                        <span className="hourly-state py-2">{<FontAwesomeIcon title={`${hour.condition.text}`} style={{color:"inherit"}} icon={`${hour.icon}`} />}</span>
                        <span className="hourly-temp">{Math.round(hour.temp_c)}°</span>
                    </div>
                ))}
            </div>
            </div>
        </div>
     );
}
 
export default HourlyForecastToday;