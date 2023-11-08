import React from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"

function WeatherCard(props) {


  // const forecastIcon = {"Sunny": sunny}
  // imgSrc = forecastIcon[props.data.forecast]
  let imgSrc;
  function change(){
    if(props.data.forecast === "Sunny"){
      imgSrc = sunny
    }else if(props.data.forecast === "Rainy"){
      imgSrc = rainy
    }else if(props.data.forecast === "Partly cloudy"){
      imgSrc = partlyCloudy
    } else if(props.data.forecast === "Cloudy"){
      imgSrc = cloudy
    } else{
      imgSrc = rainy
    }
  }  
  change()
  return (
    <div className = "card">
        <div className = "img-container">
        <img className="card-img-top" src = {imgSrc} alt="Card image cap" id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard

module.exports = WeatherCard;