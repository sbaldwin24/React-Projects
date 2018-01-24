import { SET_SEARCH_TERM } from "./actions";

const DEFAULT_STATE = {
  searchTerm: ""
};

const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

/**
 * @param {object} state
 * @param {object} action
 * @see http://redux.js.org/docs/basics/Reducers.html
 * @see http://redux.js.org/docs/basics/Reducers.html#note-on-relationships
 * @see http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
 * @see http://redux.js.org/docs/recipes/reducers/BasicReducerStructure.html
 * @see http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
 */
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
