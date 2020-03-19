import React from 'react';
import Route from 'components/route';

const Layout = () => (
  <div className="view-container">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
            Sidebar
        </div>
        <div className="col-md-9">
          <Route />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
