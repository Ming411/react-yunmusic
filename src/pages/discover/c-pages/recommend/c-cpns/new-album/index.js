import React, {memo, useEffect, useRef} from 'react';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import {getNewAlbumAction} from '../../store/actionCreators';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {AlbumWrapper} from './style';
import {Carousel} from 'antd';
import HYAlbumCover from '@/components/album-cover';

const HYNewAlbum = memo(() => {
  const {newAlbums} = useSelector(
    state => ({
      newAlbums: state.getIn(['recommend', 'newAlbum'])
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const pageRef = useRef();
  // 测试请求数据
  useEffect(() => {
    // 这里因为要传参直接调用它，调用后返回的也是一个函数
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title='新碟上架'></HYThemeHeaderRCM>
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={e => pageRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                    return (
                      <HYAlbumCover key={iten.blurPicUrl} info={iten} size={118} bgp='-570px'>
                        {iten.name}
                      </HYAlbumCover>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className='arrow arrow-right sprite_02'
          onClick={e => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});

export default HYNewAlbum;
