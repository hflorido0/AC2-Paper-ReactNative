import { useState } from 'react';
import { View } from 'react-native';
import { Commons } from '../styles/Commons';
import { Button, TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

  return (
    <View style={Commons.container}>
    <TextInput
      label="Usuario"
      value={user}
      onChangeText={setUser}
      style={Commons.input}
    />
    <TextInput
      label="Password"
      value={password}
      onChangeText={setPassword}
      style={Commons.input}
    />
    <Button icon="camera" 
      mode="contained" 
      style={Commons.input}
      onPress={() => navigation.navigate('Home')}>
      Acceder
    </Button>
    </View>
  );
}

export default Login;