import * as React from 'react';

import { BottomNavigation, Text } from 'react-native-paper';
import Images from '../Images';
import Login from '../Login';
import Perfil from '../Perfil';
import Modal from '../Modal';

const BottomNavigator = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Images', title: 'Images', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const MusicRoute = () => <Images />;

  const AlbumsRoute = () => <Perfil />;

  const RecentsRoute = () => <Modal />;

  const NotificationsRoute = () => <Text>Notifications</Text>;

  const renderScene = BottomNavigation.SceneMap({
    Images: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigator;