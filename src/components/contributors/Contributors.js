import React from 'react';
import PropTypes from 'prop-types';
import './contributors.css';

function Contributors(props) {
  const { contributors } = props;
  return (
    <div className="contributors">
      <p className="contributors__title"> Contributors: </p>
      <ul className="contributors__list">
        {contributors?.map((contributor) => (
          <li
            key={contributor.id}
            className="contributor"
            style={{ listStyle: 'none' }}
          >
            <a className="contributor__link" href={contributor.html_url}>
              <img className="contributor__img" alt="" src={contributor.avatar_url} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contributors.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  })),
};

export default React.memo(Contributors);
