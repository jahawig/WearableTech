import 'react-native-gesture-handler';
import React from "react";

import ProfileView from "./ProfileView";
import ExercisesView from "./ExercisesView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator(); // Bottom Tabs Navigator (https://reactnavigation.org/docs/tab-based-navigation)

class BottomTab extends React.Component {
    constructor(props) {
        super(props);
    }

    // Set the access token
    setAccessToken = (newAccessToken) => {
        this.setState({ accessToken: newAccessToken });
    };

    setUsername = (newUsername) => {
        this.setState({ username: newUsername })
    }

    render() {
        return (

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Profile') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Exercise') {
                            iconName = 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Profile">
                    {(props) => (
                        <ProfileView {...props} setAccessToken={this.props.setAccessToken} getAccessToken={this.props.getAccessToken} getUsername={this.props.getUsername} token = {this.props.token} username = {this.props.username}/>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Exercise">
                    {(props) => (
                        <ExercisesView {...props} setAccessToken={this.props.setAccessToken} getAccessToken={this.props.getAccessToken} getUsername={this.props.getUsername} token = {this.props.token} username = {this.props.username}/>
                    )}
                </Tab.Screen>
            </Tab.Navigator>

        );
    }
}
export default BottomTab;