import phones from 'api/mockPhones';

export const fetchPhones = async () => new Promise((resolve) => {
  resolve(phones);
});

export const loadMorePhones = async () => new Promise((resolve) => {
  resolve(phones);
});
