import React, {memo, useCallback, useRef, useState, useEffect} from 'react';
import {Slider} from 'antd';
import {PlaybarWrapper, Control, PlayInfo, Operator} from './style';
import {getPlayUrl, formatDate} from '@/utils/format-utils';
import {NavLink} from 'react-router-dom';

const HYAppPlayerBar = memo(() => {
  const currentSong = 29004400;
  const duration = 321000; // 接口失效，固定歌曲时长
  const showDuration = formatDate(duration, 'mm:ss');
  // props and state
  // 当前歌曲播放的时间
  const [currentTime, setCurrentTime] = useState(0);
  const showCurrentTime = formatDate(currentTime, 'mm:ss');
  // 控制进度条组件的进度
  const [progress, setProgress] = useState(0);
  // 通过第三方变量来控制是歌曲自动播放设置进度还是人为手动拖动
  const [isChanging, setIsChanging] = useState(false);
  // 控制是否正在播放
  const [isPlaying, setIsPlaying] = useState(false);
  // const progress = (currentTime / duration) * 100;
  // other hooks
  const audioRef = useRef();

  // handle
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong);
  }, [currentSong]);

  // audio 的进度改变事件
  const timeUpdate = e => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100); // 设置的是百分之多少
    }
  };
  // ant进度条事件
  const sliderChange = useCallback(
    value => {
      setIsChanging(true);
      // 滑动时让滑动时间跟随改变
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
      // console.log('change', value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    value => {
      const currentTime = ((value / 100) * duration) / 1000; // 获取到的是毫秒，需要的是秒
      audioRef.current.currentTime = currentTime;
      // 解决进度条闪烁
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);
      // console.log('end', value);
      if (!isPlaying) {
        // 滑动后让歌曲自动播放
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'></button>
          <button className='sprite_player play' onClick={e => playMusic()}></button>
          <button className='sprite_player next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to='/discover/player'>
              <img
                src='https://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg?param=34y34'
                alt=''
              />
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>烟火里的尘埃</span>
              <a href='/#' className='singer-name'>
                华晨宇
              </a>
            </div>
            <div className='progress'>
              <Slider
                defaultValue={30}
                value={progress}
                onChange={e => sliderChange(e)}
                onAfterChange={e => sliderAfterChange(e)}
              />
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'></span>
                <span className='duration'>{showDuration}</span>
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
            <button className='sprite_player btn playlist' onClick={e => {}}></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={() => {}} />
    </PlaybarWrapper>
  );
});

export default HYAppPlayerBar;
