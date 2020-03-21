import {
  prop, map, sum, pluck, compose, length, filter, contains,
} from 'ramda';

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = (state) => {
  const applySearch = (item) => contains(
    state.phonesPage.search.toLowerCase(),
    item.name.toLowerCase(),
  );

  return compose(
    filter(applySearch),
    map((id) => getPhoneById(state, id)),
  )(state.phonesPage.ids);
};

export const getTotalBasketCount = (state) => length(state.basket);

export const getTotalBasketPrice = (state) => compose(
  sum,
  pluck('price'),
  map((id) => getPhoneById(state, id)),
)(state.basket);
