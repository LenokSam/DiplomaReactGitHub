import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';
import './repositorycard.css';
import Contributors from '../contributors/Contributors';

function RepositoryCard(props) {
  const { repository = JSON.parse(localStorage.getItem('repository')) } = props;
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch(repository.contributors_url).then((res) => res.json()).then((data) => {
      setContributors(data);
    });
  }, [repository.contributors_url]);

  return (
    <div className="repository-card">
      <div className="repository-owner">
        <img className="repository-owner__img" alt="" src={repository.owner.avatar_url} />
        <div className="repository-owner__login">
          <BsFillPersonFill color="00d91d" className="icon" />
          <a href={repository.html_url} className="repository-owner__name">
            {repository.owner.login}
          </a>
        </div>
      </div>
      <div className="repository-card__repository">
        <div className="repository-card__title">
          <RiGitRepositoryLine size="30px" className="repository-card__title-icon icon" />
          <a href={repository.svn_url} className="repository-card__title-name">
            {repository.name}
          </a>
        </div>
        <p className={repository.language ? 'repository-card__language' : 'invisible'}>
          {repository.language}
        </p>
        <div className={repository.description ? 'repository-card__description' : 'invisible'}>
          {repository.description}
        </div>
        <div className="repository-card__rating">
          <p className="rating-stars">
            <AiFillStar className="icon" />
            {repository.stargazers_count}
          </p>
          <p className="rating-issues">
            <FaComments className="icon" />
            {repository.forks_count}
          </p>
        </div>
        <div className="repository-card__topics">
          {repository.topics.map((item, i) => <p key={item} className="topic">{item}</p>)}
        </div>
        <Contributors
          contributors={contributors.length > 10 ? contributors.slice(0, 10) : contributors}
        />
        <p className="repository-card__commit">
          {`Updated: ${repository.created_at}`}
        </p>
      </div>
    </div>
  );
}

RepositoryCard.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    contributors_url: PropTypes.string.isRequired,
    description: PropTypes.string,
    stargazers_count: PropTypes.number.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string),
    html_url: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,

    }).isRequired,
  }),
};

export default React.memo(RepositoryCard);
