import {
  GET_SEARCHED_REPOSITORIES_ERROR,
  GET_SEARCHED_REPOSITORIES_REQUEST,
  GET_SEARCHED_REPOSITORIES_SUCCESS,
  SET_SEARCHED_REPOSITORIES_PAGE,
} from './action';

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  total: 0,
  limit: 1,
  page: 1,
};

export function searchedRepositoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCHED_REPOSITORIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        limit: action.payload.limit,
        page: action.payload.page,
      };
    }
    case GET_SEARCHED_REPOSITORIES_SUCCESS: {
      const repos = action.payload?.items ?? [];
      const total = action.payload?.total_count ?? 0;

      return {
        ...state,
        isLoading: false,
        items: repos,
        total,
      };
    }
    case GET_SEARCHED_REPOSITORIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case SET_SEARCHED_REPOSITORIES_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
