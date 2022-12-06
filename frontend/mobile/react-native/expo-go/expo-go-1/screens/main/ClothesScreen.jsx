import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const ClothesScreen = ({ navigation }) => {
  const onPressButton = async () => {
    await SecureStore.deleteItemAsync(`accessToken`);
    
    if (await SecureStore.getItemAsync(`refreshToken`)) {
      await SecureStore.deleteItemAsync(`refreshToken`);
    }

    navigation.navigate("signIn");
  };

  return (
    <SafeAreaView>
      <Button onPress={onPressButton} title="Logout" />
    </SafeAreaView>
  );
};

export default ClothesScreen;
