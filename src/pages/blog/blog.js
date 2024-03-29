import React from "react";
import { Link } from "react-router-dom";

/**
 * Blog Component
 * Renders a list of blog articles with links to read more
 */
export default function blog() {
  return (
    <>
      <div className="row justify-content-center text-center">
        <h1>Blog</h1>
        <div className="col-sm-8">
          <p>
            Welcome to our Weather App blog, your go-to resource for all things
            related to weather forecasting, agriculture, and the latest updates
            on our app's features and functionalities. Here, we strive to
            provide valuable insights, tips, and tutorials to help you make the
            most out of our app and stay ahead of the curve in managing
            weather-related challenges on your farm.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-2 d-flex flex-column align-items-stretch">
          <div class="card text-center h-100 d-flex">
            <div class="card-header">Article</div>
            <div class="card-body d-flex flex-column align-items-center justify-content-center pb-0">
              <h5 class="card-title">Mastering Crop Management with Precision Weather Insights</h5>
              <p class="card-text">
                A farmers guide to crop management
              </p>
              <Link to="/Blog-0" class="btn btn-primary">
                Read
              </Link>
            </div>
            <div class="card-footer text-muted">
              Written by Kenza Z. 18/03/2024
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div class="card text-center">
            <div class="card-header">Article</div>
            <div class="card-body">
              <h5 class="card-title">Unlocking the Power of Weather Data: How Our App Can
                Revolutionize Your Farming Practices</h5>
              <p class="card-text">
                How to optimize farming practices using weather data
              </p>
              <Link to="/Blog-1" class="btn btn-primary">
                Read
              </Link>
            </div>
            <div class="card-footer text-muted">
              Written by Kenza Z. 18/03/2024
            </div>
          </div>
        </div>
        <div className="col-sm-2 d-flex flex-column align-items-stretch">
          <div class="card text-center h-100">
            <div class="card-header">Article</div>
            <div class="card-body d-flex flex-column align-items-center justify-content-center pb-0">
              <h5 class="card-title">Weather Resilience 101: Tips and Strategies for Mitigating Risks
                on Your Farm</h5>
              <p class="card-text">
                Tips and tricks to make your farm weather resilient
              </p>
              <Link to="/Blog-2" class="btn btn-primary">
                Read
              </Link>
            </div>
            <div class="card-footer text-muted">
              Written by Kenza Z. 18/03/2024
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
