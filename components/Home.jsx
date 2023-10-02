import React from 'react';
import { View, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {
  const openSignForm = async () => {
    navigation.navigate('SignForm', { slug: 'LEVGR9rhZYf86M', email: 'signer@example.com' });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Sign Document" onPress={openSignForm} />
    </View>
  );
};

export default SecondScreen;
