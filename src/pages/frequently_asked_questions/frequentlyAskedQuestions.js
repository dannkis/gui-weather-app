import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import mainPage from "./faqs_pages/main.js";

export default function FrequentlyAskedQuestions() {
  const [selectedQuestion, setSelectedQuestion] = useState(mainPage);
  const [activeKey, setActiveKey] = useState("#main");

  const showQuestion = (index, key) => {

    const questions = [
      require("./faqs_pages/main.js"),
      require("./faqs_pages/question1.js"),
      require("./faqs_pages/question2.js"),
      require("./faqs_pages/question3.js"),
      require("./faqs_pages/question4.js"),
      require("./faqs_pages/question5.js")
    ];

    if (index >= 0 && index < questions.length) {
      const QuestionComponent = questions[index].default;
      setSelectedQuestion(<QuestionComponent />);
      setActiveKey(key);
    } else {
      console.error("Invalid question index");
    }
  };

  return (
    <>
      {selectedQuestion}

      <div className="row px-2 pt-0">
        <ListGroup
          className="col col-sm-10 offset-sm-1 d-flex justify-content-center px-4 border-30 text-light"
          defaultActiveKey={activeKey}
        >
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#main"
            onClick={() => showQuestion(0, "#main")}
          >
            FAQs
          </ListGroup.Item>
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-1"
            onClick={() => showQuestion(1, "#question-1")}
          >
            Subscription and Payment
          </ListGroup.Item>
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-2"
            onClick={() => showQuestion(2, "#question-2")}
          >
            Account Management
          </ListGroup.Item>
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-3"
            onClick={() => showQuestion(3, "#question-3")}
          >
            App Usage and Navigation
          </ListGroup.Item>
          <ListGroup.Item
            className="d-flex justify-content-center"
            variant="secondary"
            action
            href="#question-4"
            onClick={() => showQuestion(4, "#question-4")}
          >
            Technical Support
          </ListGroup.Item>
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
