import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function NextBtn(props) {
  const { page, lastPage, onClickNext } = props;
  const handleClick = useCallback(() => {
    onClickNext(page);
  }, [onClickNext, page]);
  return (
    <button
      className={page === lastPage ? 'disabled nav-bat' : 'next nav-bat'}
      onClick={handleClick}
      type="button"
    >
      Next
    </button>
  );
}

NextBtn.propTypes = {
  onClickNext: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default React.memo(NextBtn);
