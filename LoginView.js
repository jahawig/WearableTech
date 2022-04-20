import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import base64 from "base-64"; // Use this library to encode `username:password` to base64

class LoginView extends React.Component {
  // Use Basic access authentication (https://en.wikipedia.org/wiki/Basic_access_authentication) to authenticate the user.
  // React Native 1 lecture covered a good example of how to do this.
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  test_log = async() => {
    // console.log("Entered");
    fetch('https://cs571.cs.wisc.edu/login', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + base64.encode(this.state.username + ":" + this.state.password)
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          this.props.setAccessToken(res.token);
          this.props.setUsername(this.state.username);
        } else {
          alert("Incorrect username or password! Please try again.");
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>FitnessTracker</Text>
        <Text style={styles.center}>Welcome! Please login or signup to continue.</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(name) => this.setState({ username: name })}
          value = {this.state.username}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(pw) => this.setState({ password: pw })}
          value = {this.state.password}
        />

        {/* To navigate to another component, use this.props.navigation.navigate( ' Screen Name ' ).*/}


          {/* Button to take the filled in fields and login*/}
          <Button
            title="LOGIN"
            onPress={this.test_log}
          />

          <Button
            title="SIGNUP"
            onPress={() => this.props.navigation.navigate('SignUp')}
            buttonStyle={{ backgroundColor: '#660000' }}
            textStyle={{ color: "white" }}
          />

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
  },
});

export default LoginView;
