import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';


const Category = ({ id, name }) => {
  const params = useParams();

  const linkClass = classNames({
    'list-group-item': true,
    active: params.id === id,
  });
  return (
    <Link
      to={`/categories/${id}`}
      className={linkClass}
    >
      {name}
    </Link>
  );
};

export default Category;
