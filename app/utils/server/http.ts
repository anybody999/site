/* eslint-disable import/prefer-default-export */
export const CACHE_CONTROL = {
  home: 'private, max-age=300',
  default: 'private, max-age=300',
  popular: `public, max-age=${60 * 60 * 5}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  trending: `public, max-age=${60 * 60}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  topRated: `public, max-age=${60 * 60 * 5}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  discover: `private, max-age=${60 * 5}`,
  search: `public, max-age=${60 * 60}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  watch: `private, max-age=${60 * 5}`,
  movie: `public, max-age=${60 * 60}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  tv: `public, max-age=${60 * 60}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  anime: `public, max-age=${60 * 60}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  person: `public, max-age=${60 * 60}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  collection: `public, max-age=${60 * 60 * 5}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  detail: `public, max-age=${60 * 60 * 5}, s-maxage=1, stale-while-revalidate=${60 * 60 * 24}`,
  season: `private, max-age=${60 * 5}`,
  episode: `private, max-age=${60 * 5}`,
};
