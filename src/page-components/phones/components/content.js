import React, { useEffect } from 'react';
import { Phone } from 'page-components/phones/components/index';
import Loading from 'components/loading';
import { getPhones } from 'units/selectors';
import { fetchPhones, loadMorePhones } from 'actions';
import { connect } from 'react-redux';

const Content = ({ fetchPhones, phones }) => {
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

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

const mapStateToProps = (state) => ({
  phones: getPhones(state),
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
