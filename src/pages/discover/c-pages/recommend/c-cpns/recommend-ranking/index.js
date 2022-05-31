import React, {memo, useEffect} from 'react';
// import {useDispatch} from 'react-redux';
import {RankingWrapper} from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
// import {getTopListAction} from '../../store/actionCreators';
const HYRecommendRanking = memo(() => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTopListAction(0));
  // }, [dispatch]);

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title='榜单'></HYThemeHeaderRCM>
      <h2>接口失效</h2>
    </RankingWrapper>
  );
});

export default HYRecommendRanking;
