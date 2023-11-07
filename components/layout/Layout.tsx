import React from "react";
// import Nav from '../nav/Nav'
// import Footer from "../footer/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
     {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
