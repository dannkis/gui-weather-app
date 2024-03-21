import React, { useState } from "react";
import { ListGroup } from "react-bootstrap"; // Importing ListGroup from react-bootstrap for stylish navigation
import mainPage from "./mainPage.js"; // Importing the mainPage component
import weatherBasics from "./weatherBasics.js"; // Importing the weatherBasics component for weather fundamentals
import cropAdvisory from "./cropAdvisory.js"; // Importing the cropAdvisory component for crop-specific advice
import advancedTechniques from "./advancedTechniques.js"; // Importing the advancedTechniques component for advanced farming methods
import communityForum from "./communityForum.js"; // Importing the communityForum component for community discussion

// The ResourcesAndLearning component serves as the main container for resource navigation and display
export default function ResourcesAndLearning() {
  // State hook for managing the currently selected resource component
  const [selectedResource, setSelectedResource] = useState(mainPage);
  // State hook for managing the active key to highlight the currently selected list group item
  const [activeKey, setActiveKey] = useState("#mainPage");

  // Function to change the displayed resource based on user interaction
  const showResource = (index, key) => {
    // Array containing all resource components for easy access by index
    const resources = [
      mainPage,
      weatherBasics,
      cropAdvisory,
      advancedTechniques,
      communityForum
    ];

    // Check if the selected index is valid and update state accordingly
    if (index >= 0 && index < resources.length) {
      const ResourceComponent = resources[index]; // Get the resource component based on index
      setSelectedResource(<ResourceComponent />); // Set the selected resource component to display
      setActiveKey(key); // Update the active key for list group item highlighting
    } else {
      console.error("Invalid resource index"); // Error handling for invalid index selection
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Navigation column with resource links */}
        <div className="col-md-3" style={{maxHeight: "100vh", overflowY: "auto"}}>
          <ListGroup
            className="d-flex flex-column justify-content-center text-light"
            defaultActiveKey={activeKey} // Set the active list group item based on state
          >
            {/* List group items for each resource */}
            <ListGroup.Item
              action
              href="#mainPage"
              onClick={() => showResource(0, "#mainPage")} // Set the mainPage component as the selected resource
            >
              Resources Overview
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#weatherBasics"
              onClick={() => showResource(1, "#weatherBasics")} // Set the weatherBasics component as the selected resource
            >
              Weather Basics
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#cropAdvisory"
              onClick={() => showResource(2, "#cropAdvisory")} // Set the cropAdvisory component as the selected resource
            >
              Crop Advisory
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#advancedTechniques"
              onClick={() => showResource(3, "#advancedTechniques")} // Set the advancedTechniques component as the selected resource
            >
              Advanced Techniques
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#communityForum"
              onClick={() => showResource(4, "#communityForum")} // Set the communityForum component as the selected resource
            >
              Community Forum
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* Main content display column */}
        <div className="col-md-9">
          {selectedResource} {/* Render the selected resource component */}
        </div>
      </div>
    </div>
  );
}


