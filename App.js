import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, MoreMenu } from "./src/pages";
import { Text } from "react-native";
import { BottomNavigation } from "./src/config/bottombarnavigation";
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{
          headerShown: false
        }} name="Home" component={BottomNavigation} />
        <Stack.Screen name="MoreMenu" component={MoreMenu}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

