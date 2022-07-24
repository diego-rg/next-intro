import React from "react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Layout das paxinas</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
