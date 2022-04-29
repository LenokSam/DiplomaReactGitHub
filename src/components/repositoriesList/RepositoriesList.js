import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository/Repository';
import './repositoriesList.css';

function RepositoriesList(props) {
  const { repositories } = props;
  return (
    <div className="repositories">
      <ul className="repositories__list">
        {repositories?.map((el) => (
          <li key={el.id} style={{ listStyleType: 'none' }}>
            <Repository repository={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
  })),
};
export default React.memo(RepositoriesList);
