import React from 'react';
import { connect } from 'react-redux';
import { getTotalBasketPrice, getBasketPhonesWithCount } from 'units/selectors';
import { removePhoneFromBasket } from 'actions';


const Basket = ({ phones, totalPrice, removePhoneFromBasket }) => {
  const isBasketEmpty = phones.length === 0;

  return (
    <div>
      {isBasketEmpty && <div>Your shopping cart is empty</div>}

      <div className="table-responsive">
        <table className="table-bordered table-striped table-condensed cf">
          <tbody>
            {phones.map(({
              id, image, name, count, price,
            }) => (
              <tr
                key={id}
                className="item-checout"
              >
                <td className="first-column-checkout">
                  <img
                    className="img-thumbnail"
                    src={image}
                    alt={name}
                  />
                </td>
                <td>{name}</td>
                <td>
                  $
                  {price}
                </td>
                <td>{count}</td>
                <td>
                  {/* eslint-disable-next-line */}
                  <span
                    role="button"
                    className="delete-cart"
                    onClick={() => removePhoneFromBasket(id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isBasketEmpty && (
      <div className="row">
        <div className="pull-right total-user-checkout">
          <b>Total:</b>
          $
          {totalPrice}
        </div>
      </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  phones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state),
});

const mapDispatchToProps = {
  removePhoneFromBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
