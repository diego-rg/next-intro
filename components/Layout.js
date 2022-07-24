import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <h1>Layout das paxinas</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
