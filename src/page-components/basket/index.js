import React from 'react';
import { connect } from 'react-redux';
import { getTotalBasketPrice, getBasketPhonesWithCount } from 'units/selectors';
import { Content, SideBar } from './componets';

const Basket = () => (
  <>
    <div className="col-md-9">
      <Content />
    </div>
    <div className="col-md-3 btn-user-checkout">
      <SideBar />
    </div>
  </>
);

const mapStateToProps = (state) => ({
  phones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state),
});

export default connect(mapStateToProps, null)(Basket);
