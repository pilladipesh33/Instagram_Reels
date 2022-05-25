import { View} from 'react-native';
import React from 'react';
import Navigation from './navigation';
import { ThemeProvider } from './context/Themes';

const App = () => {
  return (

    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
