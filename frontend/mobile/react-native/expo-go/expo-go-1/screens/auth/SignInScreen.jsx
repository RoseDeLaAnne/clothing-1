import axios from "axios";

import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const SignInScreen = ({ navigation }) => {
  const onPressButton = async () => {
    try {
      const url = `http://192.168.0.102:8000/api/token/`;
      const json = {
        username: "rose",
        password: "ak47coder5",
      };

      const response = await axios.post(url, json);

      if (response.status === 200) {
        await SecureStore.setItemAsync("accessToken", response.data.access);
        await SecureStore.setItemAsync("refreshToken", response.data.refresh);

        navigation.navigate("clothes");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <Button onPress={onPressButton} title="SignIn" />
      <Button
        onPress={() => navigation.navigate("signUp")}
        title="SignUp Screen"
      ></Button>
    </SafeAreaView>
  );
};

export default SignInScreen;
