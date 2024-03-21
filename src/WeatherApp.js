import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./customReact.scss";
import "./WeatherApp.scss";
import Nav from "./components/nav/nav.js";
import Home from "./pages/home/home.js";
import Blog from "./pages/blog/blog.js";
import FAQ from "./pages/frequently_asked_questions/frequentlyAskedQuestions.js";
import RAL from "./pages/resources_and_learning/resourcesAndLearning.js"
import PrevHistory from "./pages/previous_history/previousHistory.tsx"
import Blog0 from "./pages/blog/blog_pages/blogPage0";
import Blog1 from "./pages/blog/blog_pages/blogPage1";
import Blog2 from "./pages/blog/blog_pages/blogPage2";
import ErrorPage from "./pages/errorPage.js";
/**
 * Main App Component
 * Renders the main application layout using React Router for navigation
 */
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
          <Route path="blog-0" element={<Blog0/>}/>
          <Route path="blog-1" element={<Blog1/>}/>
          <Route path="blog-2" element={<Blog2/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
