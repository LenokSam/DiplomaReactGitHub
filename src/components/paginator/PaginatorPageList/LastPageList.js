import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PageItem from '../PageItem/PageItem';

function LastPageList(props) {
  const {
    pages, onClick, page, lastPage,
  } = props;
  const handleClickLastPage = useCallback((pageX) => {
    onClick(pageX);
  }, [onClick]);
  return (
    [...pages.keys()].reverse().map((item) => {
      const pageC = lastPage - item;
      return (
        <li className="pagination__page" key={item}>
          <PageItem
            page={pageC}
            selected={pageC === page}
            onPageClick={handleClickLastPage}
          />
        </li>

      );
    })
  );
}

LastPageList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default React.memo(LastPageList);
