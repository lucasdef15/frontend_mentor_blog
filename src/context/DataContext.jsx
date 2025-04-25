import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

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
    <DataContext.Provider value={{ articles, setArticles }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
