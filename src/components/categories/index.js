import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from 'units/selectors';
import { Category, AllCategories } from './components';


const Categories = ({ categories }) => (
  <div className="well">
    <h4>Brand</h4>
    <div className="list-group">
      <AllCategories />
      {categories.map((category) => (
        <Category key={category.id} id={category.id} name={category.name} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

export default connect(mapStateToProps, null)(Categories);
