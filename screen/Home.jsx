import React from 'react';
//rnfe
import { View, TouchableOpacity } from 'react-native';
import { Button, Appbar, Avatar } from 'react-native-paper';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';

const Main = ({ navigation }) => {
  return (
    <View>
      <Appbar>
        <Appbar.Action icon="heart" />
        <Appbar.Content title="App" />
        <Appbar.Action icon="account-circle" />
        <Appbar.Action icon="camera" />
      </Appbar>
      <TouchableOpacity>
        <Avatar.Image
          source={{
            uri: 'https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/185811680_488333675927454_6665760091937812598_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEMJff-9ph55_BJ3QBPgocK-dI87vPqlOj50jzu8-qU6PDhBF5VSXxec16WQpe5BSMmSQRB5QvWstUUK597rnNM&_nc_ohc=aovUVjotg5cAX8EncZJ&_nc_ht=scontent.fdac24-1.fna&oh=08f5611eb224a10de2639f9e6bdac9a2&oe=61DCA74C',
          }}
          size={180}
          style={{ alignSelf: 'center', margin: 25 }}
        />
      </TouchableOpacity>
      <Button
        color="white"
        style={{ backgroundColor: 'blue', margin: 10 }}
        onPress={() => navigation.navigate('Register')}
      >
        Click me
      </Button>
    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Home;
