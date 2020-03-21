import React from 'react';
import Phones from 'page-components/phones';
import Layout from 'components/layout';

export default () => (
  <Layout>
    <div className="row">
      <div className="col-md-3">
        Sidebar
      </div>
      <div className="col-md-9">
        <Phones />
      </div>
    </div>
  </Layout>
);
