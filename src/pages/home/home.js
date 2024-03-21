import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";

import "./home.scss";

import WindyElement from "../../media/elements/windy.svg";
import HumidityElement from "../../media/elements/hum.svg";
import FlowerGood from "../../media/elements/flower_good.svg";

import useAPI from "../../hooks/useAPI";
import useHourly from "../../hooks/useHourly";
import useHistory from "../../hooks/useHistory";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useLocationName from "../../hooks/useLocationName";
import formatCurrentDate from "../../components/nav/useFormattedDate";

export default function Home() {
  //apis for the location
  const { location, errorL } = useCurrentLocation();
  const { locationName, errorLN } = useLocationName(
    location?.latitude,
    location?.longitude
  ); // this is for example, just pass your city as prop to your component
  const [city, setCity] = useState(locationName?.[0]?.name);

  console.log("LOCATION NAME: ", locationName?.[0]?.name);

  useEffect(() => {
    setCity(locationName?.[0]?.name);
  }, [locationName]);

  const resetCity = () => {
    setCity(locationName?.[0]?.name); // Set it to the default value
  };

  const currentDate = formatCurrentDate();

  //weather api
  const { data, error } = useAPI(location?.latitude, location?.longitude);

  //various weather informaiton
  const temp = parseInt(data?.main.temp);
  const humidity = data?.main.humidity;
  const wind = data?.wind.speed;
  const description = data?.weather[0].main;
  const icon = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`;

  //using the hourly forecast
  const { dataH, errorH } = useHourly(location?.latitude, location?.longitude);
  const time = parseInt(dataH?.list[0].dt_txt.slice(11, 13));
  const hourF1 = parseInt(dataH?.list[0].main.temp);
  const hourF2 = parseInt(dataH?.list[1].main.temp);
  const hourF3 = parseInt(dataH?.list[2].main.temp);

  //icons for the furture hours
  const iconF1 = `https://openweathermap.org/img/wn/${dataH?.list[0].weather[0].icon}@2x.png`;
  const iconF2 = `https://openweathermap.org/img/wn/${dataH?.list[1].weather[0].icon}@2x.png`;
  const iconF3 = `https://openweathermap.org/img/wn/${dataH?.list[2].weather[0].icon}@2x.png`;

  // using the api for hours before
  const { dataHis, errorHis } = useHistory(
    location?.latitude,
    location?.longitude
  );

  // temps for the hours before the current one
  const hourH1 = parseInt(dataH?.list[24].main.temp);
  const hourH2 = parseInt(dataHis?.list[23].main.temp);
  const hourH3 = parseInt(dataHis?.list[22].main.temp);

  //icons for the hours before the current one
  const iconH1 = `https://openweathermap.org/img/wn/${dataHis?.list[24].weather[0].icon}@2x.png`;
  const iconH2 = `https://openweathermap.org/img/wn/${dataHis?.list[23].weather[0].icon}@2x.png`;
  const iconH3 = `https://openweathermap.org/img/wn/${dataHis?.list[22].weather[0].icon}@2x.png`;

  // differnet features for farmers
  const frosting =
    temp <= 0 ? "High" : temp > 0 && temp < 4 ? "Moderate" : "Low";
  const warningConditions = [
    "thunderstorm with heavy rain",
    "heavy thunderstorm",
    "ragged thunderstorm",
    "thunderstorm with heavy drizzle",
    "heavy intensity drizzle",
    "heavy intensity drizzle rain",
    "heavy shower rain and drizzle",
    "heavy intensity rain",
    "very heavy rain",
    "extreme rain",
    "freezing rain",
    "heavy intensity shower rain",
    "ragged shower rain",
    "heavy snow",
    "sleet",
    "shower sleet",
    "rain and snow",
    "shower snow",
    "heavy shower snow",
    "sand/dust whirls",
    "squalls",
    "tornado",
  ];
  const condition = data?.weather[0].description;
  const alertWarning = warningConditions.includes(condition)
    ? condition
    : "None";

  //manually inputted by admin values based on location
  const vwc = 30;
  const pestInfection = 0;

  //optimal temp is between 15 and 27
  const tempPercentage = temp >= 15 && temp <= 27 ? 20 : 0;
  const vwcPercentage = vwc == 30 ? 20 : 0;
  const alertWarningPercentage = alertWarning == "None" ? 20 : 0;
  const frostingPercentage = temp <= 0 ? 0 : temp > 0 && temp < 4 ? 10 : 20;
  const pestInfectionPercentage = pestInfection <= 10 ? 20 : 0;

  const overallPecentage =
    tempPercentage +
    vwcPercentage +
    alertWarningPercentage +
    frostingPercentage +
    pestInfectionPercentage;

  return (
    <>
      <div className="row px-2 pt-0">
        {/* WEATHER BASIC INFO SECTION */}
        <div className="col col-sm-12 bg-primary px-4 border-30">
          <div className="row justify-content-center">
            <div className="col col-md-6 d-flex justify-content-center container-fluid">
              <div className="row w-100 bg-image-1 border-30 justify-content-center">
                <div className="col col-sm-12 d-flex justify-content-center text-light text-shadow-sm">
                  <p className="h4">{currentDate} - Today</p>
                </div>

                <div className="col col-sm-8 d-flex justify-content-center">
                  <div
                    className="basic-weather-info container-fluid d-flex border-30 shadow-lg
                 border-dark-tr"
                  >
                    <div className="row w-100">
                      <div className="col col-sm-12 d-flex justify-content-center text-secondary">
                        <p className="display-0 m-0 text-shadow position-relative">
                          {temp}°C
                        </p>
                      </div>
                      <div className="col col-sm-12 d-flex justify-content-center text-secondary text-center align-items-center text-shadow-sm">
                        <p>{description}</p>
                      </div>

                      <div className="col col-sm-12 container-fluid text-light">
                        <div className="row align-items-center">
                          <div className="col col-sm-4 text-center">
                            <img src={WindyElement} alt="wind" /> Wind
                          </div>
                          <div className="col col-sm-4 text-center">|</div>
                          <div className="col col-sm-4 text-center">
                            {wind}M/S
                          </div>
                        </div>
                      </div>

                      <div className=" col col-sm-12 container-fluid text-light">
                        <div className="row align-items-center">
                          <div className="col col-sm-4 text-center">
                            <img src={HumidityElement} alt="wind" /> Hum
                          </div>
                          <div className="col col-sm-4 text-center">|</div>
                          <div className="col col-sm-4 text-center">
                            {humidity}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* WEATHER INSIGHT SECTION */}
            <div className="col col-md-6 d-flex justify-content-center">
              <div className="row w-100 bg-image-1 border-30">
                <div className="col col-sm-12 d-flex justify-content-around">
                  {/* CARD-WEATHER 1 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourH3}°C</span>
                    <img src={iconH3} alt="cloudy" className="p-0 img-fluid" />
                    <span className="p-0">{time - 4}:00</span>
                  </div>
                  {/* CARD-WEATHER 2 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourH2}°C</span>
                    <img src={iconH2} alt="cloudy" className="p-0 img-fluid" />
                    <span className="p-0">{time - 3}:00</span>
                  </div>
                  {/* CARD-WEATHER 3 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourH1}°C</span>
                    <img
                      src={iconH1}
                      alt="cloudy"
                      className="p-0 overflow-hidden img-fluid"
                    />
                    <span className="p-0">{time - 2}:00</span>
                  </div>
                  {/* ACTIVE CARD-WEATHER 4 A.K.A CURRENT HOUR ZONE */}
                  <div className="border-30 m-2 card-weather-active w-100 p-2 text-light  d-flex flex-column justify-content-center align-items-center">
                    <span>{temp}°C</span>
                    <img src={icon} alt="cloudy" className="img-fluid" />
                    <span>{time - 1}:00</span>
                  </div>
                  {/* CARD-WEATHER 5 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0 img-fluid">{hourF1}°C</span>
                    <img src={iconF1} alt="cloudy" className="p-0 img-fluid" />
                    <span className="p-0">{time}:00</span>
                  </div>
                  {/* CARD-WEATHER 6 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourF2}°C</span>
                    <img src={iconF2} alt="cloudy" className="p-0 img-fluid" />
                    <span className="p-0">{time + 1}:00</span>
                  </div>
                  {/* CARD-WEATHER 7 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourF3}°C</span>
                    <img src={iconF3} alt="cloudy" className="p-0 img-fluid" />
                    <span className="p-0">{time + 2}:00</span>
                  </div>
                </div>
                <div className="col col-sm-12 container-fluid text-light">
                  <div className="row justify-content-center">
                    <div className="col col-sm-10 weather-insight border-30 border-dark-tr mx-2">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col col-sm-12 dropdown-center">
                            <Dropdown>
                              <Dropdown.Toggle
                                className="location-box bg-light border-30 text-dark text-center p-2 w-100"
                                variant="success"
                                id="dropdown-basic"
                              >
                                <span className="h4">{city}</span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="d-column justify-content-center text-center dropdown-menu-dark w-100">
                                <Dropdown.Item onClick={resetCity}>
                                  Current
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    setCity("Manchester");
                                  }}
                                >
                                  Manchester
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => setCity("Birmingham")}
                                >
                                  Birmingham
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => setCity("Bristol")}
                                >
                                  Bristol
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="row p-0">
                          <div className="col col-sm-7 container-fluid">
                            <div className="row p-0">
                              <p>Average Temperature: {temp}°</p>
                            </div>
                            <div className="row p-0">
                              <p>Volumetric Water Content (VWC): 20-40</p>
                            </div>
                            <div className="row p-0">
                              <p>Warnings/Alerts: {alertWarning}</p>
                            </div>
                            <div className="row p-0">
                              <p>Chance of Frosting: {frosting}</p>
                            </div>
                            <div className="row p-0">
                              <p>Pest Infection Level: 0%</p>
                            </div>
                          </div>
                          <div className="col col-sm-1 d-flex justify-content-center p-0 p-0 m-0">
                            <div className="vr p-1 border-30 mb-4"></div>
                          </div>
                          <div className="col col-sm-4 d-flex justify-content-center align-items-center">
                            <div className="container-fluid p-0 ">
                              <div className="row w-100 pt-0">
                                <div className="col col-sm-12 d-flex justify-content-center">
                                  <img
                                    className="img-shadow"
                                    src={FlowerGood}
                                    alt="happy flower"
                                  />
                                </div>
                              </div>

                              <div className="row w-100 p-0">
                                <div className="col col-md-12 text-center">
                                  <p>Overall Percentage</p>
                                </div>
                                <div className="col col-md-12 d-flex align-items-center justify-content-center">
                                  <p className="text-secondary text-shadow h4">
                                    {overallPecentage}%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-2 pt-0">
        {/* LINKS SECTION */}
        <div className="col col-sm-12 bg-primary p-0 border-30">
          <div className="container-fluid">
            <div className="row justify-content-evenly">
              {/* LEARNING & RESOURCES LINK */}
              <Nav.Link
                as={Link}
                to="/resources-and-learning"
                className="col col-sm-7 bg-image-6 resources-and-learning border-30 d-flex align-items-end p-0 link-unstyled"
              >
                <div className="d-flex justify-content-center align-items-center w-100 p-5 link-section-text border-bottom-30">
                  <span>Learning & Resources</span>
                </div>
              </Nav.Link>
              {/* PREVIOUS HISTORY LINK */}
              <Nav.Link
                as={Link}
                to="/previous-history"
                className="col col-sm-4 bg-image-7 previous-history border-30 d-flex align-items-end p-0"
              >
                <div className="d-flex justify-content-center align-items-center w-100 p-5 link-section-text border-bottom-30">
                  <span>Previous History</span>
                </div>
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
