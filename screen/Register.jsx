import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { TextInput, Button, Checkbox, Headline } from 'react-native-paper';

const Main = () => {
  return (
    <View style={styles.inputs}>
      <Headline style={styles.headline}>Register</Headline>
      <TextInput placeholder="Enter full name" style={styles.inputs} />
      <TextInput type="email" placeholder="Enter email" style={styles.inputs} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputs}
      />
      <Button color="white" style={styles.btn}>
        Register
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    margin: 10,
  },
  headline: {
    textAlign: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: 'blue',
    marginTop: 20,
  },
});
