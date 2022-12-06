import jwt_decode from "jwt-decode";

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";

import ClothesScreen from "./screens/main/ClothesScreen";

const Stack = createNativeStackNavigator();

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const checkIsLogged = async () => {
    if (await SecureStore.getItemAsync(`accessToken`)) {
      setIsLogged(
        jwt_decode(await SecureStore.getItemAsync(`accessToken`)).exp * 1000 >
          Date.now()
      );
    } else {
      setIsLogged(false);
    }
  };

  checkIsLogged();

  return isLogged ? (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="clothes" component={ClothesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signIn" component={SignInScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="clothes" component={ClothesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
