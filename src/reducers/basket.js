import { append } from 'ramda';

import {
  ADD_PHONE_TO_BASKET,
} from 'constants/actionsType';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return append(payload, state);
    default:
      return state;
  }
};
