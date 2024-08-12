import React from "react";
import logo from "../img/pdf.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" width={100} />
        <h1>Report</h1>
      </header>
    </>
  );
};

export default Header;
