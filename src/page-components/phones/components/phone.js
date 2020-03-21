import React from 'react';
import { take } from 'ramda';
import { Link } from 'react-router-dom';

const Phone = ({ phone, index }) => {
  const shortDescription = `${take(60, phone.description)}...`;

  return (
    <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
      <div className="thumbnail">
        <img
          className="img-thumbnail"
          src={phone.image}
          alt={phone.name}
        />
        <div className="caption">
          <h4 className="pull-right">
            $
            {phone.price}
          </h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </h4>
          <p>{shortDescription}</p>
          <p className="itemButton">
            <button
              type="button"
              className="btn btn-primary"
            >
              Buy Now!
            </button>
            <Link
              to={`/phones/${phone.id}`}
              className="btn btn-default"
            >
              More info
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phone;
