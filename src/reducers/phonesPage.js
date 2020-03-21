import { pluck } from 'ramda';
import { FETCH_PHONES_SUCCESS } from 'constants/actionType';

const initialState = {
  ids: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS: {
      return {
        ...state,
        ...{
          ids: pluck('id', payload),
        },
      };
    }
    default:
      return state;
  }
};
