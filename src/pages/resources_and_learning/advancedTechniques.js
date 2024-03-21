import React from "react";
import image1 from "../../../src/media/images/resources/advanced.jpg";

// Defines the AdvancedTechniques component to showcase innovative farming practices enhanced by weather data
export default function AdvancedTechniques() {
  return (
    <>
      {/* Title section */}
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Advanced Techniques</h1> {/* Component title */}
        </div>
      </div>
      {/* Introduction text */}
      <div className="row">
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center align-items-center">
          <p>
            Embrace the future of farming with advanced techniques that harness the power of weather data. This section explores innovative practices and technologies that can revolutionise the way you farm:
          </p>
        </div>
      </div>
      {/* Detailed list of advanced techniques */}
      <div className="row">
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center align-items-center">
          <p>
            <ul>
              <li>
                <strong>Precision Agriculture:</strong> Learn how to use GPS technology, weather stations, and IoT sensors to monitor field conditions in real time, allowing for precise adjustments in water, fertilisers, and pesticides. 
              </li>
              <li>
                <strong>Climate-Smart Agriculture (CSA):</strong> Discover practices that increase resilience to climate change, including crop diversification, improved soil management, and water conservation techniques.
              </li>
              <li>
                <strong>Remote Sensing:</strong> Find out how satellite imagery and drones can provide valuable insights into crop health, moisture levels, and more, enabling proactive farm management.
              </li>
            </ul>
            
            Adopting these advanced techniques can enhance your farm's productivity and sustainability by making every drop of water and every bit of input count. Some links: <a href="https://www.linkedin.com/pulse/revolutionizing-agriculture-advent-advanced-crop-protection-?trk=article-ssr-frontend-pulse_more-articles_related-content-card" target="_blank" rel="noopener noreferrer">A LinkedIn article</a> {/* Link to an article on LinkedIn discussing precision agriculture */}, <a href="https://www.mckinsey.com/industries/agriculture/our-insights/agricultures-connected-future-how-technology-can-yield-new-growth" target="_blank" rel="noopener noreferrer">McKinsey & Company</a> {/* Link to McKinsey & Company's insights on Climate-Smart Agriculture */}, <a href="https://www.mdpi.com/2071-1050/13/9/4883" target="_blank" rel="noopener noreferrer">MDPI</a> {/* Link to an MDPI study on remote sensing in agriculture */}
          </p>
        </div>
        <div className="d-flex justify-content-center"> {/* This div centers the image */}
          <img 
            src={image1} 
            alt="Advanced farming techniques"
            className="img-fluid" // Ensures the image is responsive and scales with its parent
            style={{ maxWidth: "1000px", height: "auto" }} // Restricts the image to a maximum width while maintaining responsiveness
          />
        </div>
      </div>
    </>
  );
}
