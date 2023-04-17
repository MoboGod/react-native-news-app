import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/style";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", url: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              multiline
              placeholder="Insert name"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Insert anons"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.url}
              placeholder="Insert URL"
              onChangeText={props.handleChange("url")}
            />
            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: "silver",
    borderRadius: 10,
  },
});
