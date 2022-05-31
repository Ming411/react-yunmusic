// 解决数据合并带来的性能消耗问题
import {Map} from 'immutable';

import * as actionTypes from './contants';
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set('topBanners', action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum);
    default:
      return state;
  }
}

export default reducer;
