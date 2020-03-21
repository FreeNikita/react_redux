import { indexBy, prop } from 'ramda';

import {
  FETCH_CATEGORIES_SUCCESS,
} from 'constants/actionsType';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  let newValues;
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      newValues = indexBy(prop('id'), payload);
      return {
        ...state,
        ...newValues,
      };
    default:
      return state;
  }
};
