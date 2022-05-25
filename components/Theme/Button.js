import React, { useState } from 'react';
import { Button , Switch} from 'react-native';
import { ThemeContext } from '../../context/Themes/index';

export const ToggleButton = ({title}) => {
    const [isSwitchOn, setIsSwitchOn] = useState('light');
    const {toggleTheme} = React.useContext(ThemeContext);
    return (
        <Button
        title={title}
        onPress={() => toggleTheme()}
        />
    );
};
