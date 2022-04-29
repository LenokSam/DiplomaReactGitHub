import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRepositories } from '../../../redux/toprepos/thunks';
import RepositoriesList from '../../../components/repositoriesList/RepositoriesList';
import Loading from '../../../components/loading/Loading';

function TopRepos() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state?.topRepositories.items);
  const isLoading = useSelector((state) => state?.topRepositories.isLoading);
  const searchText = useSelector((state) => state?.search);
  const isSearchTextEmpty = searchText === '' || searchText === null;

  useEffect(() => {
    if (isSearchTextEmpty) {
      dispatch(getTopRepositories());
    }
  }, [dispatch, isSearchTextEmpty]);

  return (
    <div className={`top-repositories ${isSearchTextEmpty ? 'visible' : 'invisible'}`}>
      <Loading selected={isLoading} />
      <div className={!isLoading ? '' : 'invisible'}>
        <h2 className="repositories__title">
          Top 10 repositories
        </h2>
        <RepositoriesList repositories={repos} />
      </div>
    </div>
  );
}
export default React.memo(TopRepos);
