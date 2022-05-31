import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './redux/store';
import {RootNavigation} from './navigation/Route';
import {ThemeProvider} from './context/Themes';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
        <RootNavigation />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
