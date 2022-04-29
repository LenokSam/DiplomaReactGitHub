/* eslint-disable no-case-declarations */
import {
  GET_TOP_REPOSITORIES_ERROR,
  GET_TOP_REPOSITORIES_REQUEST,
  GET_TOP_REPOSITORIES_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  total: 0,
  limit: 0,
};

export const topReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_REPOSITORIES_REQUEST:
      return { ...state, isLoading: true, limit: action.payload };
    case GET_TOP_REPOSITORIES_SUCCESS:
      const repos = action.payload?.items ?? [];

      const total = action.payload?.total_count ?? 0;

      return {
        ...state, items: repos, isLoading: false, total,
      };
    case GET_TOP_REPOSITORIES_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};
