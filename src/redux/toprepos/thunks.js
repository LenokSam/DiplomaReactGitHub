import { getTopRepositoriesError, getTopRepositoriesRequest, getTopRepositoriesSuccess } from './actionCreators';
import { fetchMostRatedRepositories } from '../../services/servisesTop';

const perPageLimit = 10;

export function getTopRepositories() {
  return async (dispatch) => {
    dispatch(getTopRepositoriesRequest(perPageLimit));

    try {
      const repositories = await fetchMostRatedRepositories();

      dispatch(getTopRepositoriesSuccess(repositories));
    } catch (error) {
      dispatch(getTopRepositoriesError(error));
    }
  };
}
