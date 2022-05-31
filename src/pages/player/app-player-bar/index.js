import React, {memo, useEffect} from 'react';
import {Slider} from 'antd';
import {PlaybarWrapper, Control, PlayInfo, Operator} from './style';
import {getSongDetail} from '@/services/player';

const HYAppPlayerBar = memo(() => {
  useEffect(() => {
    getSongDetail(29004400).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control>
          <button className='sprite_player prev'></button>
          <button className='sprite_player play'></button>
          <button className='sprite_player next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img
                src='https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140x140'
                alt=''
              />
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>红豆</span>
              <a href='/#' className='singer-name'>
                要不要买买菜
              </a>
            </div>
            <div className='progress'>
              <Slider defaultValue={30} />
              <div className='time'>
                <span className='now-time'>02:30</span>
                <span className='divider'></span>
                <span className='duration'>04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop' onClick={e => {}}></button>
            <button className='sprite_player btn playlist' onClick={e => {}}>
              {/* {playList.length} */}
            </button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
});

export default HYAppPlayerBar;
