import React from 'react';
import { Link } from 'react-router-dom';

export const Subcategory = props => {
  const myId = props.id;
  const subcatLink =
    's?address=Latvija&bounds=58.35458402%2C26.07687936%2C55.48984116%2C22.39122891&mapSearch=false&pub_subcategory=' +
    props.id;

  return (
    <Link id={myId} to={subcatLink}>
      <li key={myId} className="subcategories">
        <subcategory>{props.name}</subcategory> (
        {Math.random(0, 10) * 10 > 8 ? 0 : Math.floor(Math.random(0, 100) * 40)})
      </li>
    </Link>
  );
};
