import {Navigate} from 'react-router-dom';

import HYDiscover from '../pages/discover';
import HYFriend from '../pages/friend';
import HYMine from '../pages/mine';

const routes = [
  {
    path: '/',
    // 路由重定向
    element: <Navigate to="/discover" replace={true} />
  },
  {
    path: '/discover',
    element: <HYDiscover />
  },
  {
    path: '/mine',
    element: <HYMine />
  },
  {
    path: '/friend',
    element: <HYFriend />
  }
];
export default routes;
