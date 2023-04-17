import React from "react";
import { Text, View, Button } from "react-native";

import { globalStyles } from "../styles/style";

export default function FullInfo({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.main}>
      <Text style={globalStyles.title}>{route.params.name}</Text>
      <Text style={globalStyles.title}>{route.params.anons}</Text>
      {/* <Button title="Go to home" onPress={loadScene} /> */}
    </View>
  );
}
