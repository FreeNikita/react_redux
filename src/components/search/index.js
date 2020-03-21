import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchPhone } from 'actions';

const Search = ({ searchPhone }) => {
  const [search, setSearch] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      searchPhone(search);
      setSubmit(false);
    }
  }, [search, searchPhone, submit]);

  return (
    <div className="well blosd">
      <h3 className="lead">Quick shop</h3>
      <div className="input-group">
        <form onSubmit={handleSubmit}>
          <input
            onChange={({ target: { value } }) => setSearch(value)}
            type="text"
            className="form-control"
            value={search}
          />
        </form>
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={handleSubmit} type="button">
            <span className="glyphicon glyphicon-search" />
          </button>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  searchPhone,
};

export default connect(null, mapDispatchToProps)(Search);
