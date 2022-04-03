

import useFetch from "./useFetch";
import Form from "./Form";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import HourlyForecastToday from "./components/HourlyForecastToday";


const Home = () => {
  // forecast returns: {currentWeather, forecastToday, forecastDayOne, forecastDayTwo, dailyForecastArr}
  const { gotData, getWeather, isLoading, isError, forecast } = useFetch();
  

  const submitSearch = (location) => {
    getWeather(location);
  };



  const styles = {
    gotDataTrue: {
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0, 0, 0, .6)), url(${ gotData ? forecast.currentWeather.background_image : ""})`,
      width: "100%",
      height: "100vh",
      overflowY: "scroll",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      

    },
    gotDataFalse: {
      backgroundImage: `radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )`,
      minHeight: "100vh",
      
    },
  };

  return (
    //styling page based on whether we haved fetched weather data
    <div
      className="home"
      style={
        gotData ? styles.gotDataTrue : styles.gotDataFalse
      }> 
      
      {/* checking if user is offline so we can display offline message} */}
      {!navigator.onLine && <div className="offline">You're offline</div>} 


      <Form submitSearch={submitSearch} gotData={gotData} error={isError} />

      {!isLoading && (
        <div className="content">
          <CurrentWeather forecastToday={forecast.currentWeather} error={isError} />
          <HourlyForecastToday hourlyForecast={forecast.hourlyForecastToday} />
          <DailyForecast dailyForecast={forecast.dailyForecastArr} />
        </div>
      )}
    </div>
  );
};

export default Home;
