import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <p>
        {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
      </p>
    </footer>
  );
};

export default Footer;
