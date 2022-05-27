import * as actionTypes from './contants';
const defaultState = {
  topBanners: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return {...state, topBanners: []};
    default:
      return state;
  }
}

export default reducer;
