import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getActiveCategoryId = (ownProps) => R.path(['match', 'params', 'id'], ownProps);

export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps);
  const applySearch = (item) => R.contains(
    state.phonesPage.search,
    R.prop('name', item),
  );
  const applyCategory = (item) => R.equals(
    activeCategoryId,
    R.prop('categoryId', item),
  );
  return R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map((id) => getPhoneById(state, id)),
  )(state.phonesPage.ids);
};

export const getTotalBasketCount = (state) => R.length(state.basket);

export const getTotalBasketPrice = (state) => R.compose(
  R.sum,
  R.pluck('price'),
  R.map((id) => getPhoneById(state, id)),
)(state.basket);

export const getCategories = (state) => R.values(state.categories);
