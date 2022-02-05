import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Header.css";

const Header = ({
  name,
  setname,
  category,
  setcategory,
  nameOrder,
  setnameOrder,
  dateOrder,
  setdateOrder,
}) => {
  const onChangeCategory = (e) => {
    setcategory(e.target.value);
    setnameOrder("");
    setdateOrder("");
    setname("");
  };

  const onChangeNameOrder = (e) => {
    setnameOrder(e.target.value);
    setdateOrder("");
  };

  const onChangeDateOrder = (e) => {
    setdateOrder(e.target.value);
    setnameOrder("");
  };
  return (
    <div className="header">
      <SearchBox name={name} setname={setname} />
      <div className="filter-container">
        <div className="sort-description">Sort by:</div>
        <div className="category-filter">
          <span>Category</span>
          <select value={category} onChange={(e) => onChangeCategory(e)}>
            <option value={"All"}>All</option>
            <option value={"Education"}>Education</option>
            <option value={"E-commerce"}>E-commerce</option>
            <option value={"Health"}>Health</option>
          </select>
        </div>
        <div className="name-sort">
          <span>Order</span>
          <select value={nameOrder} onChange={(e) => onChangeNameOrder(e)}>
            <option value={""}>Default</option>
            <option value={"Ascending"}>Ascending</option>
            <option value={"Descending"}>Descending</option>
          </select>
        </div>
        <div className="date-sort">
          <span>Date</span>
          <select value={dateOrder} onChange={(e) => onChangeDateOrder(e)}>
            <option value={""}>Default</option>
            <option value={"Ascending"}>Ascending</option>
            <option value={"Descending"}>Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
