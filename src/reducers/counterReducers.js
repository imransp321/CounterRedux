import { INCR, DECR } from "../utils/constants";

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCR:
      return state + 1;
    case DECR:
      return state - 1;
    default:
      return state;
  }
}
