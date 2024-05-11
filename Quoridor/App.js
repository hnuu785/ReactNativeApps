import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleplayScreen from './components/SingleplayScreen';
import MultiplayScreen from './components/MultiplayScreen';
import HomeScreen from './components/HomeScreen';
import CreateNameScreen from './components/CreateNameScreen';
import LobbyScreen from './components/LobbyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Singleplay" component={SingleplayScreen} />
        <Stack.Screen name="CreateNameStack" component={CreateNameStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CreateNameStack() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreateNameScreen" component={CreateNameScreen} />
      <Stack.Screen name="LobbyStack" component={LobbyStack} />
    </Stack.Navigator>
  );
}

function LobbyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LobbyScreen" component={LobbyScreen} />
      <Stack.Screen name="MultiplayScreen" component={MultiplayScreen} />
    </Stack.Navigator>
  );
}