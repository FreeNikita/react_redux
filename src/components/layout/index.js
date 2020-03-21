import React from 'react';

const Layout = ({ children }) => (
  <div className="view-container">
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
