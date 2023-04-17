import React, { useState } from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import MainStack from "./Navigate";

const fonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Lato-LightItalic.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        autoHideSplash={true}
        onError={(err) => console.log(err)}
      />
    );
  }
}
