import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

class Data1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  register(username, password) {
    if (password.length <= 5) {
      alert("");
      return;
    }
    encode = username;

  }

  reg_user = async () => {
    // console.log("Entered");
    if (this.state.password.length < 5) {
      alert("Password is too short! Password has to be at least 5 characters long!");
      return;
    }
    fetch('https://cs571.cs.wisc.edu/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        firstName: "",                // Optional
        lastName: "",                 // Optional
        goalDailyCalories: "0",       // Optional
        goalDailyProtein: "0",        // Optional
        goalDailyCarbohydrates: "0",  // Optional
        goalDailyFat: "0",            // Optional
        goalDailyActivity: "0",       // Optional
      })
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        // console.log(res.message);
        if (res.message == "Username already taken!") {
          alert("Sorry that username is already taken! Please try again with a different username!");
        } else if (res.message == "User created!") {
          alert("Your account was created! Navigate back to the Login Screen to enter your new account!");
        } else {
          alert(res.message);
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>ACLTech</Text>
        <Text style={styles.center}>New here? Let's get started!</Text>
        <Text style={styles.center}>Plase create an accout below.</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(name) => this.setState({ username: name })}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(pw) => this.setState({ password: pw })}
        />

        {/* To navigate to another component, use this.props.navigation.navigate( ' Screen Name ' ).*/}
        <Button
          title="Create Account"
          onPress={this.reg_user}
        />
        <Button
          title="Back to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />

        <Text style={styles.center}>Screen: SignUpView</Text>
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
  center: {
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Data1;
