import { CLEAR_ORDER } from "../actions/actionType";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.data.order };

    case CLEAR_ORDER:
      return { order: false };
    default:
      return state;
  }
};
