import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import TopRepos from './topRepo/TopRepos';
import SearchedRepos from './searchedRepos/SearhedRepos';
import { setSearchText } from '../../redux/search/actionsCreators';
import './homepage.css';
import { setSearchedRepositoriesPage } from '../../redux/searchedrepos/actionsCreators';

function HomePage() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchFromParams = searchParams.get('search');
    const pageFromParams = searchParams.get('page');
    const hasFilledSearchParams = Boolean(searchFromParams) && Boolean(pageFromParams);
    if (hasFilledSearchParams) {
      const pageFromSearch = Number.parseInt(pageFromParams, 10);
      dispatch(setSearchedRepositoriesPage(pageFromSearch));
      dispatch(setSearchText(searchFromParams));
    }
  }, [dispatch, location]);

  const onSearchChange = useCallback((text) => {
    dispatch(setSearchText(text));
  }, [dispatch]);

  return (
    <main>
      <Header onSearchChange={onSearchChange} />
      <TopRepos />
      <SearchedRepos />
    </main>
  );
}

export default React.memo(HomePage);
