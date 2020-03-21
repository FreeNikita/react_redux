import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPhoneById } from 'actions';
import { getPhoneById } from 'units/selectors';
import Loading from 'components/loading';
import { FullFields } from './components';

const Phones = ({ fetchPhoneById, phone }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchPhoneById(id);
  }, [fetchPhoneById, id]);

  if (!phone) return <Loading />;

  return (
    <div className="thumbnail">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-thumbnail"
            src={phone.image}
            alt={phone.name}
          />
        </div>
        <div className="col-md-6">
          <FullFields />
        </div>
      </div>
      <div className="caption-full">
        <h4 className="pull-right">
          $
          {phone.price}
        </h4>
        <h4>{phone.name}</h4>
        <p>{phone.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  phone: getPhoneById(state, state.phonePage.id),
});

const mapDispatchToProps = {
  fetchPhoneById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
