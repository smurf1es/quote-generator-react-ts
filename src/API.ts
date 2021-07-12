export const fetchQuote = async () => {
  const endpoint = 'https://api.quotable.io/random';
  const data = await (await fetch(endpoint)).json();

  return data;
};
