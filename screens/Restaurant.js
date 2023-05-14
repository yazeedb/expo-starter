import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';
import { CommonView } from './CommonView';
import { routes } from './routes';

export function Restaurant({ navigation }) {
  return (
    <CommonView>
      <Text>Welcome to Restaurant!</Text>
      <StatusBar style="auto" />
      <Button
        title={`Go to ${routes.home}`}
        onPress={() => {
          navigation.navigate(routes.home);
        }}
      />
    </CommonView>
  );
}
