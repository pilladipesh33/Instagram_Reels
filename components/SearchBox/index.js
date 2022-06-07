import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, IconSize} from '../../constants/Theme';

const SearchBox = ({ onChangeText}) => {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <FontAwesome name="search" color={Colors.GREY} size={IconSize.SMALL} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Colors.BLACK}
          onChangeText={onChangeText}
          style={{flex: 1, paddingHorizontal: 12}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 44,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: '100%',
    height: 44,
    backgroundColor: '#f1f3f6',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  box: {
    alignItems: 'center',
  },
});

export default SearchBox;
