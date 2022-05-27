import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconSize, Colors, Padding, FontSize} from '../../constants/Theme';
import {Input} from '../../components/Input';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components/Button';
import * as ImagePicker from 'react-native-image-picker';

const AddFeed = ({navigation}) => {
  const [imageId, setImageId] = useState('');

  function openCamera() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        base64: true,
      },
    };

    ImagePicker.launchCamera(options, res => {
      parseResponse(res);
    });
  }

  function openGallery() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      parseResponse(res);
    });
  }

  function parseResponse(res) {
    console.log('Response = ', res);
    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
      alert(res.customButton);
    } else {
      const source = {uri: res.assets[0].uri};
      setImageId(source);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={IconSize.MEDIUM}
          color={Colors.BLACK}
          onPress={() => navigation.navigate('Feed')}
          style={{position: 'absolute', left: 0, marginLeft: 10}}
        />
        <Text style={styles.headerText}>Add Feed</Text>
      </View>
      <View style={styles.container}>
        <Input
          placeholder={'Whats on your mind?'}
          newStyles={styles.textInput}
          multiline={true}
          numberOfLines={5}
        />
      </View>
      <View>
        <Button
          buttonColor={'#ffdee1'}
          titleColor={'#f04351'}
          title="Post"
          buttonStyle={{width: '50%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
        />
      </View>
      <View style={styles.postButton}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor="#9b59b6" title="Camera">
              <Icon name="camera" style={styles.actionButtonIcon} size={30} />
            </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Notifications"
            onPress={() => openGallery()}>
            <Icon
              name="md-image-outline"
              style={styles.actionButtonIcon}
              size={30}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Padding,
    height: '100%',
    backgroundColor: '#dfe8f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: FontSize.MEDIUM,
    color: Colors.BLACK,
  },
  container: {
    // top: '50%',
    // marginLeft: '10%',
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    width: '90%',
    padding: 10,
    alignSelf: 'center',
  },
  postButton: {
    top: '50%',
  },
});

export default AddFeed;
