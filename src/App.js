import React, {memo} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '@/router';
import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

const App = memo(() => {
  return (
    <div>
      <HYAppHeader></HYAppHeader>
      <div>{useRoutes(routes)}</div>
      <HYAppFooter></HYAppFooter>
    </div>
  );
});

export default App;
