import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from '../constants/routes';
import {MainScreen} from '../screens/main.screen';
import {MemesScreen} from '../screens/memes.screen';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<MainScreen />} />
      <Route path={ROUTES.memes} element={<MemesScreen />} />
    </Routes>
  );
};
