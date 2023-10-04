import { useState } from 'react';
import Pagination from 'react-js-pagination';
import './Paging.css';

function Paging() {
  const [page, setPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className="pagination-container">
      {/* 새로운 외부 div에 Tailwind CSS 클래스 추가 */}
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={450}
        pageRangeDisplayed={10}
        prevPageText="‹"
        nextPageText="›"
        onChange={handlePageChange}
        itemClass="pagination-item" // 커스텀 클래스 추가
        linkClass="pagination-link" // 커스텀 클래스 추가
      />
    </div>
  );
}

export default Paging;
