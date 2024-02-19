import { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { Commons } from '../styles/Commons';
import { ProgressBar } from 'react-native-paper';

const Perfil = () => {

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

  return (
    <View style={Commons.container}>
        <ProgressBar progress={0.5} 
          color={'blue'} 
          style={Commons.progressBar}
        />
    </View>
  );
}

export default Perfil;