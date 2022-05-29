import React, {memo, useEffect} from 'react';
import {connect} from 'react-redux';

import {getTopBannerAction} from './store/actionCreators';
const HYRecommend = memo(props => {
  const {getBanners} = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  // 依赖可以是一个函数
  return <div>HYRecommend</div>;
});

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});
const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HYRecommend);
