export const searchVars = <T, U>(term: T, location: T, categories: T, limit: U, offset: U) => {
  return {
    term: term,
    location: location,
    categories: categories,
    limit: limit,
    offset: offset
  };
}; 