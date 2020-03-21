import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPhones, loadMorePhones } from 'actions';
import { getPhones } from 'units/selectors';
import { Phone } from './components';


const Phones = ({ fetchPhones, loadMorePhones, phones }) => {
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  return (
    <>
      <div className="books row">
        {phones.map((phone, index) => (
          <Phone phone={phone} index={index} key={phone.index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
