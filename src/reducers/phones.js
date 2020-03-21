import { indexBy, prop, assoc } from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, FETCH_PHONE_BY_ID_SUCCESS } from 'constants/actionsType';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  let phones;
  switch (type) {
    case FETCH_PHONES_SUCCESS: {
      phones = indexBy(prop('id'), payload);
      return { ...state, ...phones };
    }
    case LOAD_MORE_PHONES_SUCCESS:
      phones = indexBy(prop('id'), payload);
      return { ...state, ...phones };
    case FETCH_PHONE_BY_ID_SUCCESS:
      return assoc(payload.id, payload, state);
    default:
      return state;
  }
};
