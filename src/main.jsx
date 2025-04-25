import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated imports
import Home from "./pages/Home.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Parent route wrapping the common layout */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> {/* Default route for "/" */}
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
