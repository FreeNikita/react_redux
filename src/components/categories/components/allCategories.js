import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { isNil } from 'ramda';

const AllCategories = () => {
  const { id } = useParams();
  const linkClass = classNames({
    'list-group-item': true,
    active: isNil(id),
  });

  return (
    <Link
      to="/"
      className={linkClass}
    >
      All
    </Link>
  );
};

export default AllCategories;
