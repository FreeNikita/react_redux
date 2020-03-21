import { prop } from 'ramda';

import {
  FETCH_PHONE_BY_ID_SUCCESS,
} from 'constants/actionType';

const initialState = {
  id: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return {
        ...state,
        ...{
          id: prop('id', payload),
        },
      };
    default:
      return state;
  }
};
