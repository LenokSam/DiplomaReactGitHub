import React from 'react';
import './header.css';
import { BsGithub } from 'react-icons/bs';
import PropTypes from 'prop-types';
import SearchForm from './search-form/SearchForm';

function Header(props) {
  const { onSearchChange, invisible } = props;
  return (
    <nav className="header">
      <a href="/" className="header__logo">
        <BsGithub size="50px" color="white" />
      </a>
      <SearchForm onSearchChange={onSearchChange} placeholder="Search or jump to..." selected={invisible} />
      <h1 className="header__item">
        Repositories
      </h1>
      <p className="header__item">
        Success is dependent on effort &#129318;
      </p>
    </nav>
  );
}
Header.propTypes = {
  onSearchChange: PropTypes.func,
  invisible: PropTypes.bool,

};

export default React.memo(Header);
