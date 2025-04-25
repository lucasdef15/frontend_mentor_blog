import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import SmoothScrollToTop from "./components/SmoothScrollToTop .jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SmoothScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:slug",
        element: <SingleBlogPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
