import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import mainPage from "./faqs_pages/main.js";

/**
 * Frequently Asked Questions Component
 * Renders a list of frequently asked questions with corresponding answers
 */
export default function FrequentlyAskedQuestions() {
  // State to manage the selected question and active key
  const [selectedQuestion, setSelectedQuestion] = useState(mainPage);
  const [activeKey, setActiveKey] = useState("#main");

  // Function to show the selected question based on index and key
  const showQuestion = (index, key) => {
    // Array of question components
    const questions = [
      require("./faqs_pages/main.js"),
      require("./faqs_pages/question1.js"),
      require("./faqs_pages/question2.js"),
      require("./faqs_pages/question3.js"),
      require("./faqs_pages/question4.js"),
      require("./faqs_pages/question5.js")
    ];

    // Check if index is valid
    if (index >= 0 && index < questions.length) {
      // Get the selected question component
      const QuestionComponent = questions[index].default;
      // Set the selected question component and active key
      setSelectedQuestion(<QuestionComponent />);
      setActiveKey(key);
    } else {
      console.error("Invalid question index");
    }
  };

  return (
    <>
      {/* Render the selected question */}
      {selectedQuestion}

      {/* Render the list of questions */}
      <div className="row px-2 pt-0">
        <ListGroup
          className="col col-sm-10 offset-sm-1 d-flex justify-content-center px-4 border-30 text-light"
          defaultActiveKey={activeKey}
        >
          {/* Main FAQs */}
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#main"
            onClick={() => showQuestion(0, "#main")}
          >
            FAQs
          </ListGroup.Item>
          {/* Subscription and Payment */}
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-1"
            onClick={() => showQuestion(1, "#question-1")}
          >
            Subscription and Payment
          </ListGroup.Item>
          {/* Account Management */}
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-2"
            onClick={() => showQuestion(2, "#question-2")}
          >
            Account Management
          </ListGroup.Item>
          {/* App Usage and Navigation */}
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-3"
            onClick={() => showQuestion(3, "#question-3")}
          >
            App Usage and Navigation
          </ListGroup.Item>
          {/* Technical Support */}
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-4"
            onClick={() => showQuestion(4, "#question-4")}
          >
            Technical Support
          </ListGroup.Item>
          {/* Data Privacy and Security */}
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-5"
            onClick={() => showQuestion(5, "#question-5")}
          >
            Data Privacy and Security
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
