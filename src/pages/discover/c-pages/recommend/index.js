import React, {memo} from 'react';
import {RecommendWraper, Content, RecommendLeft, RecommendRight} from './style';
import TopBannner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import HYNewAlbum from './c-cpns/new-album';
import HYRecommendRanking from './c-cpns/recommend-ranking';
import HYUserLogin from './c-cpns/user-login';
import HySettleSinger from './c-cpns/settle-singer';
import HYHotAnchor from './c-cpns/hot-anchor';

// 使用useDispatch
const HYRecommend = memo(props => {
  return (
    <RecommendWraper>
      <TopBannner></TopBannner>
      <Content>
        <RecommendLeft className='wrap-v2'>
          <HotRecommend></HotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin />
          <HySettleSinger />
          <HYHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  );
});

export default HYRecommend;

// 原始方式
/* const HYRecommend = memo(props => {
  const {getBanners} = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  // 依赖可以是一个函数
  return <div>HYRecommend</div>;
});

const mapStateToProps = state => ({
  // 获取数据
  topBanners: state.recommend.topBanners
});
const mapDispatchToProps = dispatch => ({
  // 对数据进行操作
  getBanners: () => {
    dispatch(getTopBannerAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HYRecommend); */
