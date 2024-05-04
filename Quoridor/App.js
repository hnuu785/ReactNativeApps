import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleplayScreen from './components/SingleplayScreen';
import MultiplayScreen from './components/MultiplayScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Singleplay" component={SingleplayScreen} />
        <Stack.Screen name="Multiplay" component={MultiplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}