import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { searchReducer } from './search/reducer';
import { topReducer } from './toprepos/reducer';
import { searchedRepositoriesReducer } from './searchedrepos/reducer';

const composeEnhancers = composeWithDevTools({
  name: 'Github',
});

function rootReducer() {
  return combineReducers({
    searchedRepositories: searchedRepositoriesReducer,
    search: searchReducer,
    topRepositories: topReducer,
  });
}

export const createApplicationStore = () => {
  return (createStore(rootReducer(), composeEnhancers(applyMiddleware(thunk))));
};
