import React from 'react';
import { compose, toPairs, pick } from 'ramda';
import { getPhoneById } from 'units/selectors';
import { connect } from 'react-redux';
import Loading from 'components/loading';

const FullFields = ({ phone }) => {
  if (!phone) return <Loading />;
  const columnFields = compose(
    toPairs,
    pick([
      'cpu',
      'camera',
      'size',
      'weight',
      'display',
      'battery',
      'memory',
    ]),
  )(phone);

  return columnFields.map(([key, value]) => (
    <div className="column" key={key}>
      <div className="ab-details-title">
        <p>{key}</p>
      </div>
      <div className="ab-details-info">
        {value}
      </div>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  phone: getPhoneById(state, state.phonePage.id),
});

export default connect(mapStateToProps, null)(FullFields);
