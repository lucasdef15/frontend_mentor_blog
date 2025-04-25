import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { DataProvider } from "./context/DataContext";

const App = () => {
  const device = useMediaQuery();

  return (
    <DataProvider>
      <Header />
      {device !== "mobile" && (
        <section className="patterns_wrapper">
          <img
            className="pattern_01"
            src="/assets/images/pattern-light.svg"
            alt="light pattern"
          />
          <img
            className="pattern_02"
            src="/assets/images/pattern-light.svg"
            alt="light pattern"
          />
        </section>
      )}

      <Outlet />

      <Footer />
    </DataProvider>
  );
};

export default App;
