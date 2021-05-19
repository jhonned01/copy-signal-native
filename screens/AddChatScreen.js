import React, { useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "react-native-elements/dist/input/Input";
import { db } from "../firebase";
import { Button } from "react-native-elements/";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => navigation.goBack())
      .catch((error) => Alert.alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Input
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Enter a chat name"
        leftIcon={<FontAwesome name="wechat" size="24" color="black" />}
        onSubmitEditing={createChat}
      />

      <Button onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
