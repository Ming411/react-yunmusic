import React, {memo} from 'react';
import {headerLinks} from '../../common/local-data';
import {NavLink} from 'react-router-dom';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import {HeaderWrapper, HeaderLeft, HeaderRight} from './style';
const HYAppHeader = memo(() => {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          {/* sprite_01 可以快速找到对应的图片 */}
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
