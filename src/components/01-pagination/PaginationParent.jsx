import React, { useState } from "react";
import Pagination from "./Pagination";
import "./Pagination.css";

const PaginationParent = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;

  const currentListOfItems = dummyData.slice(indexofFirstItem, indexofLastItem);

  const handlePageChange = (currPage) => {
    setCurrentPage(currPage);
  };

  return (
    <div>
      <h1 className="title">Pagination</h1>
      <ul className="list-items">
        {currentListOfItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
      />
    </div>
  );
};

export default PaginationParent;
