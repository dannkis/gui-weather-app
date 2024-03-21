import React from "react";
import image1 from "../../../src/media/images/resources/community.png";

// Defines the CommunityForum component to direct users to forums where they can interact with other farmers and agricultural experts
export default function CommunityForum() {
  return (
    <>
      {/* Row for the title */}
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Community Forums</h1> {/* Title of the component */}
        </div>
      </div>
      {/* Row for the forum description and link */}
      <div className="row">
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center align-items-center">
          <p>
            Join from a variety of forums to connect with other farmers and experts. Share your experiences, ask questions, and get advice on weather-related challenges. It's a great place to learn from others and contribute your knowledge. {/* Brief description of the forums */}
            <a href="https://thefarmingforum.co.uk/index.php?forums/-/list" target="_blank" rel="noopener noreferrer">List of Forums</a>. {/* Link to an external list of farming forums */}
          </p>
        </div>
        <div className="d-flex justify-content-center"> {/* This div centers the image */}
          <img 
            src={image1} 
            alt="community"
            className="img-fluid" // Ensures the image is responsive and scales with its parent
            style={{ maxWidth: "1000px", height: "auto" }} // Restricts the image to a maximum width while maintaining responsiveness
          />
        </div>
      </div>
    </>
  );
}
