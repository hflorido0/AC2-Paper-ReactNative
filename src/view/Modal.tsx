import { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Commons } from '../styles/Commons';
import { Button, ProgressBar } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';

const Modal = () => {

  const [show, setShow]  = useState(false);
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  return (
    <View style={Commons.container}>
        <Button onPress={() => setShow(!show)}>Mostrar Modal</Button>
        <AwesomeAlert
          show={show}
          showProgress={false}
          title="ALERTA!!"
          message="Esto es un texto test"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
           console.log('CANCEL')
          }}
          onConfirmPressed={() => {
            console.log("ACCEPT")
          }}
        />
        <Text>:o</Text>
    </View>
  );
}

export default Modal;