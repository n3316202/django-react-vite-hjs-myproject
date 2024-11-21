import React from "react";
import { Link } from "react-router-dom";

//https://getbootstrap.com/docs/5.0/components/pagination/

function PaginationB5(paging) {
  const rendering = () => {
    const row = [];

    for (let i = paging.startPage; i <= paging.endPage; i++) {
      console.log(
        "/list/" + "?pageNum=" + i + "&" + "amount=" + paging.criteria.amount
      );

      const query =
        "/boards/list" +
        "?pageNum=" +
        i +
        "&" +
        "amount=" +
        paging.criteria.amount;

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
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {rendering()}

        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationB5;
