import Login from './src/view/Login';
import BottomNavigator from './src/view/components/BottomNavigator.tsx'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  PaperProvider } from 'react-native-paper';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Images from './src/view/Images';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={BottomNavigator} />
              <Stack.Screen name="Image" component={Images} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}