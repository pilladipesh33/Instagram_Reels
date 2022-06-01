import { StyleSheet, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBox from '../../components/SearchBox'
import SearchUserItems from './SearchUserItems';
import { Colors } from '../../constants/Theme';
import { queryUserByEmail } from '../../api/services/users';


const Discover = () => {
  const [textInput, setTextInput] = useState('');
  const [searchUser, setSearchUser] = useState([]);

  useEffect(() => {
    queryUserByEmail(textInput)
    .then(setSearchUser)
  }, [textInput]);

  return (
    <SafeAreaView style={styles.screenContainer}>
        <SearchBox
        onChangeText={setTextInput}
        />
        <FlatList
        data={searchUser}
        renderItem={SearchUserItems}
        keyExtractor={(item) => item}
        />
    </SafeAreaView>
  )
}

export default Discover

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.WHITE,
    height: '100%',
  }
})