import React, {useState} from 'react';
import { Mode } from '../../constants/Mode';

export const ThemeContext = React.createContext(Mode.dark);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
