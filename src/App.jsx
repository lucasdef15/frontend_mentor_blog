import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import DataContext, { DataProvider } from "./context/DataContext";

const App = () => {
  const device = useMediaQuery();

  return (
    <DataProvider>
      <InnerApp device={device} />
    </DataProvider>
  );
};

const InnerApp = ({ device }) => {
  const { darkMode } = useContext(DataContext);

  return (
    <>
      <Header />
      {device !== "mobile" && (
        <section className="patterns_wrapper">
          <img
            className="pattern_01"
            src={`/assets/images/${
              darkMode ? "pattern-dark.svg" : "pattern-light.svg"
            }`}
            alt="light pattern"
          />
          <img
            className="pattern_02"
            src={`/assets/images/${
              darkMode ? "pattern-dark.svg" : "pattern-light.svg"
            }`}
            alt="pattern"
          />
        </section>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
