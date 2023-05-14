import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './screens/Home';
import { Restaurant } from './screens/Restaurant';
import { routes } from './screens/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={routes.home} component={Home} />
          <Stack.Screen name={routes.Restaurant} component={Restaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
