import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Form = ({ submitSearch, gotData, error }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchLocation);
  };

  const style = {
    position: "absolute", 
    top: "30%",
    left: "50%",
    transform: "translate(-50%,-50%)"
   
  }

  return (
    <>
    {gotData ?  
      <form onSubmit={handleSubmit} className="py-5">
        <div className="col-md-8 mx-auto d-flex justify-content-center align-items-center">
          <input
          type="text"
          placeholder="Enter city or post code"
          onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button type="submit"><FontAwesomeIcon className="icon" icon="magnifying-glass" /></button>
        </div>
        {error && <div className="col-md-4 mx-auto error">{error}</div>}
      </form>
      
      : 
      <div className="col-12 d-flex flex-column text-center" style={style}>
        <h1>Global weather</h1>
        <p>Covering every inch of the planet</p>

        <form onSubmit={handleSubmit} className="my-3">
          <div className="col-md-8 mx-auto d-flex justify-content-center align-items-center">
            <input
            type="text"
            placeholder="Enter city or post code"
            onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button type="submit"><FontAwesomeIcon className="icon" icon="magnifying-glass" /></button>
          </div>
        </form>
        {error && <div className="col-md-4 mx-auto error">{error}</div>}
    </div>
    }
    
    </>
  
   
  );
};

export default Form;
