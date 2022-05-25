import { Platform, StatusBar } from 'react-native';

export const Colors = {
    WHITE : 'white',
    RED: '#FE2C55',
    GREY : 'grey',
    BLACK : '#000',
    DARK_GREY : '#333333',
};

export const IconSize = {
    SMALL : 25,
    MEDIUM: 30,
    LARGE: 40,
};

export const FontSize = {
    SMALL : 16,
    MEDIUM : 20,
    LARGE: 30,
};

export const Padding = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
