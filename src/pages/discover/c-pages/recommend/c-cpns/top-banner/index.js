import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {Carousel} from 'antd';
import {getTopBannerAction} from '../../store/actionCreators';
import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from './style';

const TopBannner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {topBanners} = useSelector(
    state => ({
      // topBanners: state.get('recommend').get('topBanners')
      topBanners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual // 通过浅层比较来决定是否需要重新渲染
  );

  //
  const bannerRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  // 根据索引动态设置背景高斯模糊
  const bannerChange = useCallback((from, to) => {
    // console.log(to)
    setCurrentIndex(to);
  }, []);
  const bgImage =
    topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20';
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect='fade' beforeChange={bannerChange} autoplay ref={bannerRef}>
            {topBanners.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBannner;
