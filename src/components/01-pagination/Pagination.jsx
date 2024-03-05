import React from "react";

const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {
  const generatePages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {generatePages().map((btnNo) => {
        return (
          <button
            key={btnNo}
            onClick={() => onPageChange(btnNo)}
            className={`pagination-btn ${
              currentPage === btnNo ? "active" : ""
            }`}
          >
            {btnNo}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
