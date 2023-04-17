import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  // const loadScene = () => {
  //   navigation.navigate("Contacts");
  // };

  const [news, setNews] = useState([
    {
      name: "Youtube",
      anons: "Chill music",
      description: "Good music",
      key: "1",
      url: "data:image/png;base64,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",
    },
    {
      name: "Apple",
      anons: "Nice products",
      description: "Good products",
      key: "2",
      url: "data:image/png;base64,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",
    },
    {
      name: "Facebook",
      anons: "Bad news",
      description: "Bad news",
      key: "3",
      url: "data:image/png;base64,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",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((items) => {
      article.key = Math.random().toString();
      return [article, ...items];
    });
    setModalWindow(false);
  };
  return (
    <View style={globalStyles.main}>
      <Modal visible={modalWindow}>
        <View style={globalStyles.main}>
          <Ionicons
            name="close"
            size={24}
            color="red"
            onPress={() => setModalWindow(false)}
          />
          <Text style={globalStyles.title}>Add new state</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={24}
        color="red"
        onPress={() => setModalWindow(true)}
      />
      <Text style={globalStyles.title}>Home page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={{ width: 100, height: 100, alignSelf: "center" }}
              source={{
                width: 100,
                height: 100,
                uri: item.url,
              }}
            />
            <Text style={styles.item}> {item.name} </Text>
            <Text style={styles.anons}> {item.anons} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#333",
    fontFamily: "nunito-regular",
    textAlign: "center",
    marginTop: 10,
  },
  anons: {
    fontSize: 15,
    color: "#333",
    fontFamily: "nunito-regular",
    textAlign: "center",
    marginTop: 5,
  },
});
