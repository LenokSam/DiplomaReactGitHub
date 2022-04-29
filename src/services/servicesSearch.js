export function fetchSearchedRepositories(filters = {}) {
  const {
    date = '2018-09-30', sortBy = 'stars', order = 'desc', page = 1, perPage = 12, searchText = '',
  } = filters;
  const dateFilter = `created:">${date}"`;
  const query = `${searchText} ${dateFilter}`;

  const base = new URL('https://api.github.com/search/repositories');
  const searchParams = new URLSearchParams({
    q: query, sort: sortBy, order, page, per_page: perPage,
  });
  const url = `${base}?${searchParams}`;

  return fetch(url).then((res) => res.json());
}
