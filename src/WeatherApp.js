import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./customReact.scss";
import "./WeatherApp.scss";
import Nav from "./components/nav/nav.js";
import Home from "./pages/home/home.js";
import Blog from "./pages/blog/blog.js";
import FAQ from "./pages/frequently_asked_questions/frequentlyAskedQuestions.js";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/faq" component={FAQ} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
