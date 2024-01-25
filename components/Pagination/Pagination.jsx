import React, { useState } from "react";
import "./Pagination.css";
const Pagination = ({ totalCount = 50, limit = 10 }) => {
  const [pageNo, setPageNo] = useState(3);
  let pages = totalCount / limit;
  const pageArray = Array.from({ length: pages }, (_, index) => index + 1);
  const setCurrentPage = (val) => {
    console.log(val);
    if (val === "prev") {
      if (pageNo > 1) {
        setPageNo((prev) => prev - 1);
      }
    } else if (val === "next") {
      if (pageNo < pages) {
        setPageNo((prev) => prev + 1);
      }
    }else{
      setPageNo(+val);
    }
  };
  return (
    <>
      <div class="pagination_container">
        <div className="pagination_content">
          <button
            onClick={() => setCurrentPage("prev")}
            disabled={pageNo === 1}
          >
            Previous
          </button>
          {pageArray?.map((p) => {
            return <button
            onClick={() => setCurrentPage(p)}
            >{p}</button>;
          })}
          <button
            onClick={() => setCurrentPage("next")}
            disabled={pageNo === pages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
