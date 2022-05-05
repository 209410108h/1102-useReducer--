import { SEARCH_ITEM, START_LOADING, END_LOADING, SET_ITEM } from "./action_08";

const reducer_08 = (state, action) => {
  if (action.type === SEARCH_ITEM) {
    return { ...state, searchTerm: action.payload };
  }

  if (action.type === START_LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === END_LOADING) {
    return { ...state, loading: false };
  }

  if (action.type === SET_ITEM) {
    return { ...state, cocktails: action.payload };
  }

  throw new Error("no matching action type");
};

export default reducer_08;
