import { fetchSearchedRepositories } from '../../services/servicesSearch';
import { getSearchedRepositoriesRequest, getSearchedRepositoriesSuccess, getSearchedRepositoriesError } from './actionsCreators';

const pageLimit = 12;
export function getSearchedRepositories(searchText, page = 1) {
  return async (dispatch) => {
    dispatch(getSearchedRepositoriesRequest(page, pageLimit));
    try {
      const repositories = await fetchSearchedRepositories({ searchText, page });
      dispatch(getSearchedRepositoriesSuccess(repositories));
    } catch (error) {
      dispatch(getSearchedRepositoriesError(error));
    }
  };
}
