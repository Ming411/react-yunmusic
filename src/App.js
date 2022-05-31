import React, {memo} from 'react';
import {useRoutes} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from '@/router';
import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import HYAppPlayerBar from '@/pages/player/app-player-bar';

import store from '@/store';

const App = memo(() => {
  return (
    <Provider store={store}>
      <HYAppHeader></HYAppHeader>
      <div>{useRoutes(routes)}</div>
      <HYAppFooter></HYAppFooter>
      <HYAppPlayerBar></HYAppPlayerBar>
    </Provider>
  );
});

export default App;
