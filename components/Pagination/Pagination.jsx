import React from "react";
import "./index.css";
const Pagination = ({ totalCount = 50, limit = 10 }) => {
  let pages = totalCount / limit;
  const pageArray = Array.from({ length: pages }, (_, index) => index + 1);
  return (
    <>
      <div class="pagination">
        <button>Previous</button>
        {pageArray?.map((p) => {
          return <button>{p}</button>;
        })}
        <button>Next</button>
      </div>
    </>
  );
};

export default Pagination;
