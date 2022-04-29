export function fetchContributors(url) {
  return fetch(url).then((res) => res.json());
}
