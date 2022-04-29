import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import './repository.css';

function Repository({ repository }) {
  const detailsLink = useCallback(
    (location) => ({
      ...location,
      pathname: `/repository/${repository.owner.login}/${repository.name}`,
    }),
    [repository.owner.login, repository.name],
  );
  const sendToLocalStorage = useCallback(() => {
    localStorage.setItem('repository', JSON.stringify(repository));
  }, [repository]);
  return (
    <div className="repository-item ">
      <Link to={detailsLink} onClick={sendToLocalStorage} className="repository__title ">
        <RiGitRepositoryLine color="#283430" className="icon" />
        {repository.name}
        <span className="repository__label">{repository.visibility}</span>
      </Link>
      <div className="repository__info">
        <img className="repository__img" alt="" src={repository.owner.avatar_url} />
        <div className="repository__info_list">
          <div className="repository-owner__login">
            <BsFillPersonFill color="00d91d" className="icon" />
            <a href={repository.html_url} className="repository-owner__name">
              {repository.owner.login}
            </a>
          </div>
          <div className="repository__rating">
            <AiFillStar color="00d91d" />
            <p className="repository__commit ">
              {repository.stargazers_count}
            </p>
          </div>
          <p className="repository__commit ">
            Updated
            {' '}
            {repository.created_at}
          </p>
        </div>
      </div>
    </div>
  );
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    html_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default React.memo(Repository);
