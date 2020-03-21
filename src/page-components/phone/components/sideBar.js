import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhoneById, addPhoneToBasket } from 'actions';
import BasketCart from 'components/basketCart';
import Loading from 'components/loading';
import { getPhoneById } from 'units/selectors';

const SideBar = ({ phone, addPhoneToBasket }) => {
  if (!phone) return <Loading />;
  return (
    <div>
      <p className="lead">Quick shop</p>
      <BasketCart />
      <div className="form-group">
        <h1>{phone.name}</h1>
        <h2>
          $
          {phone.price}
        </h2>
      </div>
      <Link to="/" className="btn btn-info btn-block">Back to store</Link>
      <button
        type="button"
        className="btn btn-success btn-block"
        onClick={() => addPhoneToBasket(phone.id)}
      >
        Add to cart
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  phone: getPhoneById(state, state.phonePage.id),
});

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
