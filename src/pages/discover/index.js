import React, {memo, useEffect} from 'react';
import {DiscoverWrapper, TopMenu} from './style';
import {dicoverMenu} from '@/common/local-data';
import {NavLink, Outlet} from 'react-router-dom';

import request from '@/services/axios';
const HYDiscover = memo(() => {
  useEffect(() => {
    request({
      url: '/banner'
    }).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {dicoverMenu.map((item, index) => {
            return (
              <div className='item' key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      <Outlet></Outlet>
    </DiscoverWrapper>
  );
});

export default HYDiscover;
