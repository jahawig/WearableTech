import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View, Button } from "react-native";


import LoginView from "./LoginView";
import SignupView from "./SignupView";
import ProfileView from "./ProfileView";
import ViewPastData from "./ViewPastData";
import RecordDataView from "./RecordDataView";
import ProfileSpecifics from "./ProfileSpecifics";
import CalibrationView from "./CalibrationView";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Review the navigators from React Native 2 lecture.
const Stack = createStackNavigator(); // Stack Navigator (https://reactnavigation.org/docs/stack-navigator)

class App extends React.Component {
  constructor() {
    super();

    // Feel free to add more states here
    // Change this to false before I am done
    this.state = {
      logged: true,
      username: "username",
    };
  }

  // Set the access token
  setAccessToken = (newAccessToken) => {
    this.setState({ logged: newAccessToken });
  };

  getAccessToken = () => {
    return this.state.accessToken;
  }

  setUsername = (newUsername) => {
    this.setState({ username: newUsername })
  }

  getUsername = () => {
    return this.state.username;
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* We only want to show Login and Signup View when the user is not logged in.
              When the user is logged in, we want to show the Profile View and the Exercises View.
              
              How do we do this? See https://reactnavigation.org/docs/auth-flow
            */}

          {this.state.logged == false ? (
            // No token found, user isn't signed in
            <>
              <Stack.Screen name="Login">
                {/* This is how you pass props (e.g. setAccessToken) to another component */}
                {(props) => (
                  <LoginView {...props} setAccessToken={this.setAccessToken} setUsername={this.setUsername} token={this.accessToken} />
                )}
              </Stack.Screen>

              <Stack.Screen name="SignUp">
                {(props) => (
                  <SignupView {...props} setAccessToken={this.setAccessToken} />
                )}
              </Stack.Screen>
            </>

          ) : (
            // User is signed in
            // We can also nest another navigator (e.g. Bottom Tabs, Drawer, etc.) inside a stack navigator.
            //  See https://reactnavigation.org/docs/nesting-navigators on how to nest navigators.
            <>
              <Stack.Screen name={"Home"}>
                {(props) => (
                  <ProfileView {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

              <Stack.Screen name={"Past Data View"}>
                {(props) => (
                  <ViewPastData {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

              <Stack.Screen name={"Record New Data"}>
                {(props) => (
                  <RecordDataView {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

              <Stack.Screen name={"Your Profile"}>
                {(props) => (
                  <ProfileSpecifics {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

              <Stack.Screen name={"Calibration"}>
                {(props) => (
                  <CalibrationView {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

              <Stack.Screen name={"Good"}>
                {(props) => (
                  <CalibrationView {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

              <Stack.Screen name={"Bad"}>
                {(props) => (
                  <CalibrationView {...props} setAccessToken={this.setAccessToken} getAccessToken={this.getAccessToken} getUsername={this.getUsername} token = {this.state.accessToken} username = {this.state.username}/>
                )}
              </Stack.Screen>

            </>


          )}

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  side: {
    marginRight: 15,
  }
});

export default App;
