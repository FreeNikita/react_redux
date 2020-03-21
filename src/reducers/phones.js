import { indexBy, prop } from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from 'constants/actionType';

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
    default:
      return state;
  }
};
