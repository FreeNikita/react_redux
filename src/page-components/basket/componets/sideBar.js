import React from 'react';
import { Link } from 'react-router-dom';
import { getBasketPhonesWithCount } from 'units/selectors';
import { connect } from 'react-redux';
import { basketCheckout, cleanBasket } from 'actions';

const Sidebar = ({ phones, basketCheckout, cleanBasket }) => {
  const isBasketEmpty = phones.length === 0;
  return (
    <div>
      <Link
        className="btn btn-info"
        to="/"
      >
        <span className="glyphicon glyphicon-info-sign" />
        <span>Continue shopping!</span>
      </Link>
      {
                !isBasketEmpty
                && (
                <div>
                  <button
                    type="button"
                    onClick={cleanBasket}
                    className="btn btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash" />
                    Clear cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => basketCheckout(phones)}
                  >
                    <span className="glyphicon glyphicon-envelope" />
                    Checkout
                  </button>
                </div>
                )
            }
    </div>
  );
};

const mapStateToProps = (state) => ({
  phones: getBasketPhonesWithCount(state),

});

const mapDispatchToProps = {
  basketCheckout,
  cleanBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
