import React from "react";
import "./index.css";
const Pagination = ({ pages = 5, limit = 10 }) => {
  return (
    <>
      <div class="pagination">
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        {/* <a href="#">Previous</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">Next</a> */}
      </div>
    </>
  );
};

export default Pagination;
