import React from 'react';
import { View, Platform, StatusBar, SafeAreaView } from 'react-native';

const SafeAreaViewAndroid = ({ Component, ...rest }) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <SafeAreaView>
        <Component {...rest} />
      </SafeAreaView>
    </View>
  );
};

export default SafeAreaViewAndroid;
