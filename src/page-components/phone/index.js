import React from 'react';
import { Content, SideBar } from './components';

const Phones = () => (
  <div className="row">
    <div className="col-md-9">
      <Content />
    </div>
    <div className="col-md-3">
      <SideBar />
    </div>
  </div>
);


export default Phones;
