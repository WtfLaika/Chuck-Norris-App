import React from 'react';
import {ColorRing} from 'react-loader-spinner';
import {useAppSelector} from '../app/hooks';

export const FullScreenLoader = () => {
  const {loading} = useAppSelector(state => state.main);

  return (
    <ColorRing
      visible={loading}
      height="80"
      width="80"
      wrapperClass="loaderContainer"
      ariaLabel="blocks-loading"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};
