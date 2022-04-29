import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PageItem from '../PageItem/PageItem';

function FirstPageList(props) {
  const {
    pages, onClick, page,
  } = props;
  const onClickP = useCallback((pageX) => {
    onClick(pageX);
  }, [onClick]);
  return (
    [...pages.keys()].map((item) => {
      const pageC = item + 1;
      return (
        <li className="pagination__page" key={item}>
          <PageItem
            page={pageC}
            selected={pageC === page}
            onPageClick={onClickP}
          />
        </li>

      );
    })
  );
}

FirstPageList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default React.memo(FirstPageList);
