import React from 'react';
import { Link } from 'react-router-dom';

export const Subcategory = props => {
  const myId = props.id;
  const subcatLink = 's?pub_subcategory=' + props.id;

  return (
    <Link id={myId} to={subcatLink}>
      <li key={myId} className="subcategories">
        <subcategory>{props.name}</subcategory> (
        {Math.random(0, 10) * 10 > 8 ? 0 : Math.floor(Math.random(0, 100) * 40)})
      </li>
    </Link>
  );
};
