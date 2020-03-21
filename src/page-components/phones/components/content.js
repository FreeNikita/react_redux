import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { Phone } from 'page-components/phones/components/index';
import Loading from 'components/loading';
import { getPhones } from 'units/selectors';
import {
  fetchPhones, loadMorePhones, fetchCategories,
} from 'actions';
import { connect } from 'react-redux';

const Content = ({
  fetchPhones, fetchCategories, fetchPhonesByCategory, phones,
}) => {
  useEffect(() => {
    fetchPhones();
    fetchCategories();
  }, [fetchCategories, fetchPhones, fetchPhonesByCategory]);

  if (phones.length === 0) return <Loading />;

  return (
    <>
      <div className="books row">
        {phones.map((phone) => (
          <Phone phone={phone} key={phone.id} />
        ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            type="button"
            onClick={loadMorePhones}
            className="pull-right btn btn-primary"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownState) => ({
  phones: getPhones(state, ownState),
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  fetchCategories,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Content);
