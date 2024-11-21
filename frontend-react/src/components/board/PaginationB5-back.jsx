import React from 'react';
import { Link } from 'react-router-dom';

//https://getbootstrap.com/docs/5.0/components/pagination/

function PaginationB5({ paging, onClickPaging }) {
  //const startQuery = '/rboard/list2' + '?pageNum=' + (paging.startPage - 1) + '&' + 'amount=' + paging.cri.amount;
  //const endQuery =  '/rboard/list2' + '?pageNum=' + (paging.endPage + 1) + '&' + 'amount=' +  paging.cri.amount

  const rendering = () => {
    const row = [];

    for (let i = paging.startPage; i <= paging.endPage; i++) {
      console.log(
        '/list/' + '?pageNum=' + i + '&' + 'amount=' + paging.criteria.amount,
      );

      const query =
        '/boards/list' +
        '?pageNum=' +
        i +
        '&' +
        'amount=' +
        paging.criteria.amount;

      row.push(
        <li className="page-item">
          <Link to={query} onClick={onClickPaging} className="page-link">
            {i}
          </Link>
        </li>,
      );
    }

    return row;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {paging.prev == true && (
          <li className="page-item">
            {/* <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a> */}
            <Link
              to={
                '/boards/list' +
                '?pageNum=' +
                (paging.startPage - 1) +
                '&' +
                'amount=' +
                paging.criteria.amount
              }
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

        {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li> */}
        {paging.next == true && paging.endPage > 0 && (
          <li className="page-item">
            <Link
              to={
                '/boards/list' +
                '?pageNum=' +
                (paging.endPage + 1) +
                '&' +
                'amount=' +
                paging.criteria.amount
              }
              onClick={onClickPaging}
              className="page-link"
              aria-label="Next"
            >
              &raquo;
              {/* <span aria-hidden="true">&raquo;</span> */}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PaginationB5;
