import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

function PageItem(props) {
  const { page, onPageClick, selected } = props;
  const handleClick = useCallback((event) => {
    event.preventDefault();
    onPageClick(page);
  }, [onPageClick, page]);
  const className = `pagination-item ${selected ? 'pagination-item_selected' : ''}`;

  return (
    <a href="/" onClick={handleClick} className={className}>{page}</a>
  );
}
PageItem.propTypes = {
  page: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
export default React.memo(PageItem);
