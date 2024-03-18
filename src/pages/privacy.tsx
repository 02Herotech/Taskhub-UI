import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Privacy from "../../components/Privacy";

const privacy = () => {
  return (
    <div className={`min-h-screen`}>
      <Nav />
      <Privacy />

      <Footer />
    </div>
  );
};

export default privacy;
