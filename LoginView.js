import React from "react";
import { StyleSheet, Alert, Text, View, TouchableOpacity, Button, TextInput, ScrollView } from "react-native";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  test_log(){
    if(this.state.username = ""){
      console.log(this.state.username);
      Alert.alert("Username is empty!");
      return;
    } else {
      this.props.setAccessToken(true);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>ACLTech</Text>
          <Text style={styles.center}>Welcome! Please login or signup to continue.</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(name) => this.setState({ username: name })}
            value={this.state.username}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(pw) => this.setState({ password: pw })}
            value={this.state.password}
          />

          {/* To navigate to another component, use this.props.navigation.navigate( ' Screen Name ' ).*/}
          {/* Button to take the filled in fields and login*/}

          <TouchableOpacity style={styles.smallBold} onPress={() => this.test_log()}>
            <Text style={styles.creamText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallBold} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.creamText}>SIGNUP</Text>
          </TouchableOpacity>

          <Text style={styles.center}>Screen: LoginView</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 36,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    height: 40,
    marginVertical: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold"
  },
  creamText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff1d0",
  },
  smallBold: {
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 60,
    backgroundColor: "#800000",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 25
  },
});

export default LoginView;
