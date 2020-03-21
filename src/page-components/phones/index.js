import React from 'react';
import { Content, Sidebar } from './components';


const Phones = () => (
  <>
    <div className="col-md-3">
      <Sidebar />
    </div>
    <div className="col-md-9">
      <Content />
    </div>
  </>
);

export default Phones;
