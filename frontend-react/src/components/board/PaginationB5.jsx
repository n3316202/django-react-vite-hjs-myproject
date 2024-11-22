import React from "react";
import { Link } from "react-router-dom";

//https://getbootstrap.com/docs/5.0/components/pagination/

function PaginationB5({ paging, onClickPaging }) {
  const rendering = () => {
    const row = [];

    //http://127.0.0.1:8000/board/?page=1
    for (let i = paging.start_page; i <= paging.end_page; i++) {
      const query = "/board/" + "?page=" + i;
      console.log(query);
      row.push(
        <li className="page-item">
          <Link to={query} onClick={onClickPaging} className="page-link">
            {i}
          </Link>
        </li>
      );
    }

    return row;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {paging.is_prev == true && (
          <li className="page-item">
            {/* <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a> */}
            <Link
              to={"/board/" + "?page=" + (paging.start_page - 1)}
              onClick={onClickPaging}
              className="page-link"
              aria-label="Previous"
            >
              {/* <span aria-hidden="true">&laquo;</span> */}
              &laquo;
            </Link>
          </li>
        )}

        {rendering()}

        {/* <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li> */}

        {paging.is_next == true && (
          <li className="page-item">
            {/* <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a> */}
            <Link
              to={"/board/" + "?page=" + (paging.end_page + 1)}
              onClick={onClickPaging}
              className="page-link"
              aria-label="Next"
            >
              {/* <span aria-hidden="true">&laquo;</span> */}
              &raquo;
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PaginationB5;
