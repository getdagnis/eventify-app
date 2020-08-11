import React from "react";
import "./AllCategories.css";
import { Subcategory } from "./Subcategory/Subcategory.jsx";
import { Link } from "react-router-dom";

export const CategoryList = (props) => {
  const catLink = "/singlecategory/" + props.id;
  const category = props.cat;
  const subcategories = category.subcategories;
  const searchValue = props.search;
  console.log("props", props);
  console.log("subcategories", subcategories);
  console.log("searchValue", typeof searchValue);
  const filteredSubcategories =
    searchValue.length > 0
      ? subcategories.filter(
          (category) =>
            JSON.stringify(category)
              .toLowerCase()
              .includes(searchValue.toLowerCase()),
          () => console.log("filteredSubcategories", filteredSubcategories)
        )
      : subcategories;

  return (
    <Link id={props.id} to={catLink}>
      <h3>{category.name}</h3>
      <ul>
        {filteredSubcategories.map((subcategory) => (
          <Subcategory id={subcategory.id} name={subcategory.name} />
        ))}
      </ul>
    </Link>
  );
};
