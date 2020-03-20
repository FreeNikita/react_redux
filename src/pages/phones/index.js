import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhones } from 'actions';

class Phones extends Component {
  componentDidMount() {
    const { fetchPhones } = this.props;
    fetchPhones();
  }

  render() {
    return (
      <div>Phones</div>
    );
  }
}

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(null, mapDispatchToProps)(Phones);
