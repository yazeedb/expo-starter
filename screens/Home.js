import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { routes } from './routes';
import { CommonView } from './CommonView';

export function Home({ navigation }) {
  return (
    <CommonView>
      <Text>Welcome to Home!</Text>
      <StatusBar style="auto" />

      <Button
        title={`Go to ${routes.Restaurant}`}
        onPress={() => {
          navigation.navigate(routes.Restaurant);
        }}
      />
    </CommonView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});
