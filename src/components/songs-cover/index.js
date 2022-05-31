import React, {memo} from 'react';
import {SongsCoverWrapper} from './style';
import {getCount, getSizeImage} from '@/utils/format-utils';
const HYSongsCover = memo(props => {
  const {info, right} = props;
  // console.log(info);
  return (
    <SongsCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt='' />
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom text-nowrap'>{info.name}</div>
      <div className='cover-source'>by</div>
    </SongsCoverWrapper>
  );
});

export default HYSongsCover;
