import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleDarkModeClick = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        if (!response.ok) throw new Error("Network response was not ok");
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <DataContext.Provider
      value={{ articles, setArticles, darkMode, handleDarkModeClick }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
