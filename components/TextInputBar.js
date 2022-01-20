import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'

const TextInputBar = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const toggle = () => {
    onChangeText('');
    onChangePassword('');
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter Username'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        // secureTextEntry={true}
        value={password}
        placeholder='Enter Password'
        keyboardType='default'
      />
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginLeft: 36,
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  button: {
    alignItems: 'center',
    position: 'relative',
    top: 10,
    backgroundColor: 'blue',
    fontWeight: '300',
    padding: 10,
    fontSize: 400,
    width: 100,
    marginLeft: 125
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '200'
  }
});

export default TextInputBar;
