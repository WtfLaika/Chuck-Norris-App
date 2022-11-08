import {AppRouter} from '../router/appRouter';
import {MemoryRouter} from 'react-router-dom';
import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {createReduxStore} from '../redux/rootReducer';

export const renderWithRouter = async (component?: ReactNode, options?: any) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>,
  );
};
