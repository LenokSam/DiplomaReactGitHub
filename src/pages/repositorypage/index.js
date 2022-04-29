import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import RepositoryCard from '../../components/repositoryCard/RepositoryCard';

function RepositoryPage() {
  const { repositoryName, ownerName } = useParams();
  const currentStateOfRepositories = useSelector((state) => {
    return [
      ...(state?.searchedRepositories?.items ?? []),
      ...(state?.topRepositories?.items ?? []),
    ];
  });
  const repositoryCard = currentStateOfRepositories.filter((repository) => {
    return repository.name === repositoryName && repository.owner.login === ownerName;
  })[0];

  return (
    <div>
      <Header invisible />
      <RepositoryCard repository={repositoryCard} />
    </div>
  );
}
export default React.memo(RepositoryPage);
