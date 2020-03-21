import { find, propEq } from 'ramda';
import phones from 'api/mockPhones';

export const fetchPhones = async () => new Promise((resolve) => {
  resolve(phones);
});

export const loadMorePhones = async () => new Promise((resolve) => {
  resolve(phones);
});

export const fetchPhoneById = async (id) => new Promise((resolve) => {
  const phone = find(propEq('id', id), phones);
  resolve(phone);
});
