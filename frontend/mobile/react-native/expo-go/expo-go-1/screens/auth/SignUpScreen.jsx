import axios from "axios";

import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const SignUpScreen = ({ navigation }) => {
  const onPressButton = async () => {
    try {
      const url = `http://192.168.0.102:8000/api/sign-up/`;
      const json = {
        username: "rose",
        password: "ak47coder5",
      };

      const response = await axios.post(url, json);

      if (response.status === 201) {
        await AsyncStorage.setItem("username", response.data.username);

        navigation.navigate("signIn");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <Button onPress={onPressButton} title="SignUp" />
    </SafeAreaView>
  );
};

export default SignUpScreen;
