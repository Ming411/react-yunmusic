import * as actionTypes from './contants';
import {getTopBanners, getHotRecommends, getNewAlbum, getTopList} from '@/services/recommend';

// 将数据存储到store中
const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  topBanners: res.banners
});

// 发送网络请求
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // console.log(res);
      dispatch(changeTopBannerAction(res));
    });
  };
};

// 获取 热门推荐 数据
const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
});

export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      // console.log(res);
      dispatch(changeHotRecommendAction(res));
    });
  };
};

// 新碟上架
const changeNewAlbumAction = albums => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: albums
});

export const getNewAlbumAction = limit => {
  return dispatch => {
    // 这个函数由dispatch内部自动调用
    getNewAlbum(limit).then(res => {
      const albums = res.albums;
      dispatch(changeNewAlbumAction(albums)); // 接收一个对象
    });
  };
};

// 排行
/* const changeUpListAction = res => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist
});
const changeNewListAction = res => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist
});
const changeOriginListAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist
}); */
export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      // 接口失效
      const topList = res.list;
      console.log(topList);
      // dispatch(changeTopList(topList));
    });
  };
};
