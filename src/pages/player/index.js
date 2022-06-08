import React, {memo} from 'react';
import {PlayerWrapper, PlayerRight, PlayerLeft} from './style';

const HYPlayer = memo(() => {
  return (
    <PlayerWrapper>
      <div className='content wrap-v2'>
        <PlayerLeft>
          <h2>playerInfo</h2>
          <h2>songContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>simiPlaylist</h2>
          <h2>simiSong</h2>
          <h2>download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});

export default HYPlayer;
