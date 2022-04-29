import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getSearchedRepositories } from '../../../redux/searchedrepos/thunks';

import RepositoriesList from '../../../components/repositoriesList/RepositoriesList';
import Pagination from '../../../components/paginator/Paginator';
import { setSearchedRepositoriesPage } from '../../../redux/searchedrepos/actionsCreators';
import Loading from '../../../components/loading/Loading';

function SearchedRepos(props) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state?.search);
  const isLoading = useSelector((state) => state?.searchedRepositories.isLoading);
  const isSearchTextEmpty = searchText === '' || searchText === null;
  const searchedRepos = useSelector((state) => state?.searchedRepositories?.items);
  const {
    total,
    limit,
    page,
  } = useSelector((state) => {
    return {
      limit: state?.searchedRepositories?.limit,
      total: state?.searchedRepositories?.total,
      page: state?.searchedRepositories?.page,
    };
  });
  const isSearchedReposLoading = useSelector((state) => state?.searchedRepositories?.isLoading);
  const visibleSearchRepos = !isSearchTextEmpty && searchedRepos && !isSearchedReposLoading;
  useEffect(() => {
    const oldSearch = location.search;
    const newSearchParams = new URLSearchParams(oldSearch);
    newSearchParams.set('search', searchText);
    newSearchParams.set('page', page);
    history.push(`${location.pathname}?${newSearchParams.toString()}`);
  }, [history, location.pathname, location.search, page, searchText, dispatch]);

  useEffect(() => {
    if (!isSearchTextEmpty) {
      dispatch(getSearchedRepositories(searchText, page));
    }
  }, [searchText, dispatch, page, isSearchTextEmpty]);
  const handlePageChange = useCallback((pageToSet) => {
    dispatch(setSearchedRepositoriesPage(pageToSet));
  }, [dispatch]);
  return (
    <>
      <Loading selected={isLoading} />
      <div className={visibleSearchRepos ? ' searched-repositories visible' : 'invisible'}>
        <h2 className={total ? 'invisible' : 'error'}>
          Sorry something went wrong...
        </h2>
        <div className={!isLoading && total ? '' : 'invisible'}>
          <h2 className="repositories__title">
            Searhed
            <span className="repositories__count">{total}</span>
            repositories for your request
            <span className="repositories__count">{searchText}</span>
          </h2>
          <RepositoriesList repositories={searchedRepos} />
        </div>
        <Pagination
          total={total}
          limit={limit}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
export default React.memo(SearchedRepos);
