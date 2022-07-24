import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Header />
        <h1>Layout das paxinas</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
