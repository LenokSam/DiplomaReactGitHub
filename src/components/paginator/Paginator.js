import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LastPageList from './PaginatorPageList/LastPageList';
import FirstPageList from './PaginatorPageList/FirstPageList';
import PreviousBtn from './PrevAndNext/PreviosButton';
import NextBtn from './PrevAndNext/NextButton';
import './paginator.css';

function Pagination(props) {
  const {
    total = 0, limit = 1, showedFirstPagesCount = 5,
    showedLastPagesCount = 2, currentPage = 1, onPageChange,
  } = props;
  const numberOfPages = Math.ceil(total / limit);
  const amountVisiblePages = showedFirstPagesCount + showedLastPagesCount;
  const isMorePages = amountVisiblePages > numberOfPages;
  const amountFirstVisiblePages = isMorePages ? numberOfPages : showedFirstPagesCount;
  const amountLastVisiblePages = isMorePages ? 0 : showedLastPagesCount;

  const arrayOfFirstPages = [...(new Array(amountFirstVisiblePages))];
  const arrayOfLastPages = [...(new Array(amountLastVisiblePages))];

  const handleClickPrevPage = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [onPageChange, currentPage]);
  const handleClickNextPage = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [onPageChange, currentPage]);
  const handleClickPage = useCallback((page) => {
    onPageChange(page);
  }, [onPageChange]);
  return (
    <div className={total ? 'paginator' : 'invisible'}>
      <PreviousBtn onClickPrev={handleClickPrevPage} page={currentPage} />
      <FirstPageList
        pages={arrayOfFirstPages}
        onClick={handleClickPage}
        page={currentPage}
        firstPage={1}
      />
      {amountLastVisiblePages !== 0 && <span>...</span>}
      <LastPageList
        pages={arrayOfLastPages}
        onClick={handleClickPage}
        page={currentPage}
        lastPage={numberOfPages}
      />
      <NextBtn lastPage={numberOfPages} onClickNext={handleClickNextPage} page={currentPage} />
    </div>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  showedFirstPagesCount: PropTypes.number,
  showedLastPagesCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default React.memo(Pagination);
