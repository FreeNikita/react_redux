import React from 'react';
import Phone from 'page-components/phone';
import Layout from 'components/layout';

export default () => (
  <Layout>
    <div className="row">
      <div className="col-md-9">
        <Phone />
      </div>
      <div className="col-md-3">
        Sidebar
      </div>
    </div>
  </Layout>
);
