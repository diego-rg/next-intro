import React from "react";

import Meta from "./Meta";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Meta />
      <Navbar />
      <main>
        <Header />
        <p>Layout das paxinas</p>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
