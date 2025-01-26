export const authorizedFetch = (url, options = {}) => {
  const token = localStorage.getItem('access_token');
  
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return fetch(url, options);
};
