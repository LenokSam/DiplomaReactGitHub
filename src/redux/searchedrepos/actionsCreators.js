import {
  GET_SEARCHED_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_SUCCESS,
  GET_SEARCHED_REPOSITORIES_ERROR,
  SET_SEARCHED_REPOSITORIES_PAGE,
} from './action';

export const getSearchedRepositoriesRequest = (page, limit) => {
  return {
    type: GET_SEARCHED_REPOSITORIES_REQUEST,
    payload: {
      limit,
      page,
    },
  };
};

export const getSearchedRepositoriesSuccess = (repositories) => {
  return {
    type: GET_SEARCHED_REPOSITORIES_SUCCESS,
    payload: repositories,
  };
};

export const getSearchedRepositoriesError = (error) => {
  return {
    type: GET_SEARCHED_REPOSITORIES_ERROR,
    error,
  };
};

export function setSearchedRepositoriesPage(page) {
  return {
    type: SET_SEARCHED_REPOSITORIES_PAGE,
    payload: page,
  };
}
