import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {RecommendWrapper} from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';
import {getHotRecommendAction} from '../../store/actionCreators';
import {HOT_RECOMMEND_LIMIT} from '@/common/contants';

const HotRecommend = memo(() => {
  // state

  // redux hooks
  const {hotRecommends} = useSelector(
    state => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <HYThemeHeaderRCM title='热门推荐' keywords={['华语', '流行', '民谣']}></HYThemeHeaderRCM>
      <div className='recommend-list'>
        {hotRecommends.map((item, index) => {
          return <HYSongsCover key={item.id} info={item} />;
        })}
      </div>
    </RecommendWrapper>
  );
});

export default HotRecommend;
