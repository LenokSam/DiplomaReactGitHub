import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function PreviousBtn(props) {
  const { onClickPrev, page } = props;
  const handleClick = useCallback(() => {
    onClickPrev(page);
  }, [onClickPrev, page]);
  return (
    <button
      className={page === 1 ? 'disabled nav-bat' : 'prev nav-bat'}
      onClick={handleClick}
      type="button"
    >
      Previous
    </button>
  );
}
PreviousBtn.propTypes = {
  onClickPrev: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default React.memo(PreviousBtn);
