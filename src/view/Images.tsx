import { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { Commons } from '../styles/Commons';

const Images = () => {

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

  return (
    <View style={Commons.container}>
        <Image
            style={Commons.img}
            source={require('../../assets/images/img.jpg')}
        />
    </View>
  );
}

export default Images;