const MOVIES_DATA = "movies_data";

export const setMoviesData = (payload) =>
  localStorage.setItem(MOVIES_DATA, JSON.stringify(payload));

export const getMoviesData = () => {
  const data = localStorage.getItem(MOVIES_DATA) ?? "[]";
  return JSON.parse(data);
};
