import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});
export const searchImgs = (q, page) => {
  return instance.get('/?', {
    params: {
      key: '20424265-7f45fa22d4ab466f5f1dddb3b',
      q,
      per_page: 12,
      page,
    },
  });
};
