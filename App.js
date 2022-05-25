import React from 'react';
import Navigation from './navigation/HomeStack';
import { ThemeProvider } from './context/Themes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './redux/store';
import { RootNavigation } from './navigation/Route';

const {store, persistor} = configureStore();

const App = () => {
  return (

    // <ThemeProvider>
    //   <Navigation />
    // </ThemeProvider>
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <RootNavigation/>
          </PersistGate>
          </Provider>

  );
};

export default App;
