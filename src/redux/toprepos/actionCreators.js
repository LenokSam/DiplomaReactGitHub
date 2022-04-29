import {
  GET_TOP_REPOSITORIES_ERROR,
  GET_TOP_REPOSITORIES_REQUEST,
  GET_TOP_REPOSITORIES_SUCCESS,
} from './actions';

export const getTopRepositoriesRequest = (limit) => {
  return {
    type: GET_TOP_REPOSITORIES_REQUEST,
    payload: limit,
  };
};

export const getTopRepositoriesSuccess = (repositories) => {
  return {
    type: GET_TOP_REPOSITORIES_SUCCESS,
    payload: repositories,
  };
};

export const getTopRepositoriesError = (error) => {
  return {
    type: GET_TOP_REPOSITORIES_ERROR,
    error,
  };
};
