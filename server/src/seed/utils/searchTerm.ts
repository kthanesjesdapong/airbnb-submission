export const searchTerm = <T>(term: T, location: T, categories: T) => {
  return {
    term: term,
    location: location,
    categories: categories
  };
}; 