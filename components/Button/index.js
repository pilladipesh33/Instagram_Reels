import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View
} from 'react-native';

export const Button = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || '#512DA8',
      }}
      onPress={onPress}>
      <Text
        style={{...styles.title, ...textStyle, color: titleColor || '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const SpinButton = ({onPress, title}) => {
  const [submitSpin, setsubmitSpin] = React.useState(false);

  return (
    <TouchableOpacity
      style={styles.buttonWithSpinner}
      onPress={() => {
          setsubmitSpin(!submitSpin);
      }}>
      <Text style={styles.buttonText}>{title}</Text>
      {submitSpin ? (
        <ActivityIndicator
          style={{marginLeft: 10}}
          color={'#fff'}
          size={'small'}
        />
      ) : null}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#512DA8',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  buttonWithSpinner: {
    backgroundColor: '#B9345A',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
});
