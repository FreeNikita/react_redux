import {
  prop, map, sum, pluck, compose, length,
} from 'ramda';

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = (state) => map((id) => getPhoneById(state, id), state.phonesPage.ids);

export const getTotalBasketCount = (state) => length(state.basket);

export const getTotalBasketPrice = (state) => compose(
  sum,
  pluck('price'),
  map((id) => getPhoneById(state, id)),
)(state.basket);
