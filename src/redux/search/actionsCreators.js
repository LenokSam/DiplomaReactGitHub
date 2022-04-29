import { SET_SEARCH_TEXT } from './actions';

export const setSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text,
  };
};
