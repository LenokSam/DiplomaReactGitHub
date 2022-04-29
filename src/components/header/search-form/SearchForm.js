import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { RiSearchLine } from 'react-icons/ri';
import './search-form.css';
import { useSelector } from 'react-redux';
import useDebounce from '../../../modules/useDebounce';

function SearchForm(props) {
  const {
    placeholder, onSearchChange, selected,
  } = props;
  const searchText = useSelector((state) => state?.search);
  const handleSearchChange = useCallback((event) => {
    onSearchChange?.(event.target.value);
  }, [onSearchChange]);
  const debouncedHandleSearchChange = useDebounce(handleSearchChange, 1000);
  return (
    <div className={selected ? 'invisible' : 'search-form'}>
      <RiSearchLine color="white" />
      <input
        type="search"
        placeholder={placeholder}
        defaultValue={searchText}
        className="search-form__input"
        onChange={debouncedHandleSearchChange}
      />
    </div>
  );
}

SearchForm.propTypes = {
  onSearchChange: PropTypes.func,
  placeholder: PropTypes.string,
  selected: PropTypes.bool,
};

export default React.memo(SearchForm);
