import {render} from '@testing-library/react';
import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {store} from '.././App';

export const renderWithRedux = async (component: ReactNode, options?: any) => {
  return render(<Provider store={store}>{component}</Provider>);
};
