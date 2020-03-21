import React from 'react';

const Layout = ({ children }) => (
  <div className="view-container">
    <div className="container">
      {children}
    </div>
  </div>
);

export default Layout;
