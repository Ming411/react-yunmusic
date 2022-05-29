import * as actionTypes from './contants';
import {getTopBanners} from '@/services/recommend';

// 将数据存储到store中
const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  topBanners: res.banners
});

// 发送网络请求
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res));
    });
  };
};
