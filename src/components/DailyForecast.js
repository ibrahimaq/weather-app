import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DailyForecast = ({ dailyForecast }) => {
  return (
    <div id="dailyForecast" className="mt-2 py-2 mx-auto">
      <div className="container text-center px-4">
        {dailyForecast.map((day, index) => (
          <div className="row my-4 " key={index}>
            <div className="col-3 text-start">{day.weekday}</div>
            <div className="col-6 mx-auto">
              <FontAwesomeIcon className="icon" title={`${day.weatherState}`} icon={`${day.icon}`} />
            </div>
            <div className="tempCol col-3 d-flex justify-content-end fw-bold">
              <div>
                {day.maxTemp}
                <span>°</span>
              </div>
              <span style={{ color: "#6c757d" }}>/</span>
              <div style={{ color: "#6c757d" }}>
                {day.minTemp}
                <span>°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
