import React, { useEffect } from 'react';
import { Description } from 'page-components/phone/components/index';
import { useParams } from 'react-router';
import Loading from 'components/loading';
import { getPhoneById } from 'units/selectors';
import { fetchPhoneById } from 'actions';
import { connect } from 'react-redux';

const Content = ({ fetchPhoneById, phone }) => {
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
          <Description />
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
