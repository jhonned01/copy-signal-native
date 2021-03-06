import React, { useState, useEffect } from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unSubscribe;
  }, []);

  const SignUn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => Alert.alert(error.message));
  };

  const Register = () => {
    navigation.navigate("Register");
  };
  return (
    <KeyboardAvoidingView bahavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          onSubmitEditing={SignUn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={SignUn} title="Login" />
      <Button
        containerStyle={styles.button}
        type="outline"
        onPress={Register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
