import React from "react";
import { Text, TextInput, View } from "react-native";
import Container from "../../components/common/Container";

const Login = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <Container>
      <Text>Hi from Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </Container>
  );
};

export default Login;
