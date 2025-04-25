import { useState, useEffect } from "react";

const getDeviceType = (width) => {
  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
};

const useMediaQuery = () => {
  const [device, setDevice] = useState(getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useMediaQuery;
