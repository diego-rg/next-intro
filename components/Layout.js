import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <h1>Layout das paxinas</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
