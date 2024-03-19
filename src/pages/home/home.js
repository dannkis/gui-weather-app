import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";

import "./home.scss";
import CloudyElement from "../../media/elements/weather/cloudy.png";
import ClearCloudyElement from "../../media/elements/weather/clear-cloudy.png";

import WindyElement from "../../media/elements/windy.svg";
import HumidityElement from "../../media/elements/hum.svg";
import PrevButton from "../../media/elements/prev_day.png";
import NextButton from "../../media/elements/next_day.png";
import FlowerGood from "../../media/elements/flower_good.svg";

import useAPI from "../../hooks/useAPI";
import useHourly from "../../hooks/useHourly";
import useHistory from "../../hooks/useHistory";
import getLocation from "../../components/location/getLocation";


export default function Home() {
  const city = 'Manchester'; // this is for example, just pass your city as prop to your component
  const { data, error } = useAPI();
  const temp = parseInt(data?.main.temp);
  const humidity = data?.main.humidity;
  const wind = data?.wind.speed;
  const description = data?.weather[0].main; 
  const icon = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`;

  const { dataH, errorH } = useHourly(city);
  const time = parseInt(dataH?.list[0].dt_txt.slice(11,13));
  const hourF1 = parseInt(dataH?.list[0].main.temp);
  const hourF2 = parseInt(dataH?.list[1].main.temp);
  const hourF3 = parseInt(dataH?.list[2].main.temp);

  const iconF1 = `https://openweathermap.org/img/wn/${dataH?.list[0].weather[0].icon}@2x.png`; 
  const iconF2 = `https://openweathermap.org/img/wn/${dataH?.list[1].weather[0].icon}@2x.png`; 
  const iconF3 = `https://openweathermap.org/img/wn/${dataH?.list[2].weather[0].icon}@2x.png`; 


  const { dataHis, errorHis } = useHistory(city);

  //  const hourH1 = parseInt(dataH?.list[0].main.temp);
  const hourH2 = parseInt(dataHis?.list[23].main.temp);
  const hourH3 = parseInt(dataHis?.list[22].main.temp);

  const iconH2 = `https://openweathermap.org/img/wn/${dataHis?.list[23].weather[0].icon}@2x.png`; 
  const iconH3 = `https://openweathermap.org/img/wn/${dataHis?.list[22].weather[0].icon}@2x.png`; 

  console.log(getLocation())

  return (
    <>
      <div className="row px-2 pt-0">
        {/* WEATHER BASIC INFO SECTION */}
        <div className="col col-sm-12 bg-primary px-4 border-30">
          <div className="row">
            <div className="col col-md-6 d-flex justify-content-center container-fluid">
              <div className="row w-100 bg-image-1 border-30">
                <div className="col col-sm-12 d-flex justify-content-center text-light text-shadow-sm">
                  <p className="h4">Friday 10th February 2024 - Today</p>
                </div>
                <div className="col col-sm-2 d-flex align-items-center">
                  <a className="button-basic-weather" href="#">
                    <img src={PrevButton} alt="previous button" />
                  </a>
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
                          <div className="col col-sm-4 text-center">{wind}M/S</div>
                        </div>
                      </div>

                      <div className=" col col-sm-12 container-fluid text-light">
                        <div className="row align-items-center">
                          <div className="col col-sm-4 text-center">
                            <img src={HumidityElement} alt="wind" /> Hum
                          </div>
                          <div className="col col-sm-4 text-center">|</div>
                          <div className="col col-sm-4 text-center">{humidity}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-2 d-flex justify-content-end align-items-center">
                  <a className="button-basic-weather" href="#">
                    <img src={NextButton} alt="next button" />
                  </a>
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
                    <span className="p-0">{time-4}:00</span>
                  </div>
                  {/* CARD-WEATHER 2 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourH2}°C</span>
                    <img src={iconH2} alt="cloudy" className="p-0 img-fluid" />
                    <span className="p-0">{time-3}:00</span>
                  </div>
                  {/* CARD-WEATHER 3 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">21°C</span>
                    <img
                      src={ClearCloudyElement}
                      alt="cloudy"
                      className="p-0 overflow-hidden img-fluid"
                    />
                    <span className="p-0">{time-2}:00</span>
                  </div>
                  {/* ACTIVE CARD-WEATHER 4 A.K.A CURRENT HOUR ZONE */}
                  <div className="border-30 m-2 card-weather-active w-100 p-2 text-light  d-flex flex-column justify-content-center align-items-center">
                    <span>{temp}°C</span>
                    <img
                      src={icon}
                      alt="cloudy"
                      className="img-fluid"
                    />
                    <span>{time-1}:00</span>
                  </div>
                  {/* CARD-WEATHER 5 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0 img-fluid">{hourF1}°C</span>
                    <img
                      src={iconF1}
                      alt="cloudy"
                      className="p-0 img-fluid"
                    />
                    <span className="p-0">{time}:00</span>
                  </div>
                  {/* CARD-WEATHER 6 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourF2}°C</span>
                    <img
                      src={iconF2}
                      alt="cloudy"
                      className="p-0 img-fluid"
                    />
                    <span className="p-0">{time+1}:00</span>
                  </div>
                  {/* CARD-WEATHER 7 */}
                  <div className="border-30 m-2 card-weather text-light d-flex flex-column justify-content-center align-items-center border-dark-tr">
                    <span className="py-0">{hourF3}°C</span>
                    <img
                      src={iconF3}
                      alt="cloudy"
                      className="p-0 img-fluid"
                    />
                    <span className="p-0">{time+2}:00</span>
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
                                <Dropdown.Item href="#/action-1">
                                  Location 1
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Location 2
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Location 3
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
                              <p>Warnings/Alerts: None</p>
                            </div>
                            <div className="row p-0">
                              <p>Chance of Frosting: None</p>
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
                                    96%
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