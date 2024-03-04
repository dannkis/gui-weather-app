import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./customReact.scss";
import "./WeatherApp.scss";
import Nav from "./components/nav/nav.js";
import Home from "./pages/home/home.js";
import Blog from "./pages/blog/blog.js";
import FAQ from "./pages/frequently_asked_questions/frequentlyAskedQuestions.js";
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
