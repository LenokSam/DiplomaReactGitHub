import React from 'react';
import PropTypes from 'prop-types';
import preloader from './Spinner.svg';

function Loading(props) {
  const { selected } = props;
  return (
    <div className={selected ? '' : 'invisible'}>
      <img alt="" src={preloader} />
    </div>
  );
}

Loading.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default React.memo(Loading);
