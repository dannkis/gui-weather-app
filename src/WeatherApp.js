import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./customReact.scss";
import "./WeatherApp.scss";
import Nav from "./components/nav/nav.js";
import Home from "./pages/home/home.jsx";
import Blog from "./pages/blog/blog.js";
import FAQ from "./pages/frequently_asked_questions/frequentlyAskedQuestions.js";
import RAL from "./pages/resources_and_learning/resourcesAndLearning.js"
import PrevHistory from "./pages/previous_history/previousHistory.js"
import ErrorPage from "./pages/errorPage.js";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="resources-and-learning" element={<RAL/>}/>
          <Route path="previous-history" element={<PrevHistory/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
