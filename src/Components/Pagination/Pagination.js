import React from "react";
import "./Pagination.css";
import { FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, pagesNumber, setcurrentPage }) => {
  const goToPage = (pageNumber) => {
    if (pageNumber > pagesNumber) return;

    if (pageNumber < 1) return;

    setcurrentPage(pageNumber);
  };
  return (
    <div className="pagination">
      <div className="prev" onClick={() => goToPage(currentPage - 1)}>
        prev
      </div>
      <div>
        <span className="currentPage">{currentPage}</span>
        <span style={{ display: "inline-block", marginRight: 5 }}>of</span>
        <span>{pagesNumber}</span>
      </div>
      <div className="next" onClick={() => goToPage(currentPage + 1)}>
        next
        <span className="next-icon">
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
