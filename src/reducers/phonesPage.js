import { pluck, concat } from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from 'constants/actionsType';

const initialState = {
  ids: [],
};

export default (state = initialState, { type, payload }) => {
  let ids;
  switch (type) {
    case FETCH_PHONES_SUCCESS: {
      return {
        ...state,
        ...{
          ids: pluck('id', payload),
        },
      };
    }
    case LOAD_MORE_PHONES_SUCCESS:
      ids = pluck('id', payload);
      return {
        ...state,
        ...{
          ids: concat(ids, state.ids),
        },
      };
    default:
      return state;
  }
};
