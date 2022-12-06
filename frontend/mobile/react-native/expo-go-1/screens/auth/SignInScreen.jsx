import axios from "axios";

import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const onPressButton = async () => {
    const url = `http://192.168.175.1:8000/api/token/`;
    const json = {
      username: "admin",
      password: "admin",
    };

    const response = await axios.post(url, json);

    console.log('response')
  };

  return (
    <SafeAreaView>
      <Button onPress={onPressButton} title="SignIn" />
    </SafeAreaView>
  );
};

export default SignInScreen;
