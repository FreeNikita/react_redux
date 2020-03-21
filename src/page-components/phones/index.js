import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from 'actions';
import { getPhones } from 'units/selectors';
import { Phone } from './components';


class Phones extends Component {
  componentDidMount() {
    const { fetchPhones } = this.props;
    fetchPhones();
  }

  render() {
    const { phones } = this.props;
    return (
      <div>
        <div className="books row">
          {phones.map((phone, index) => <Phone phone={phone} index={index} />)}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  phones: getPhones(state),
});

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
