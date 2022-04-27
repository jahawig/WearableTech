import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>ACLTech</Text>
          <Text style={styles.center}>Welcome! Please login or signup to continue.</Text>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Past Data View')}>
            <Text style={styles.creamText}>Delete Data and Account</Text>
          </TouchableOpacity>
          

          <Text style={styles.center}> Screen: ProfileSpecifics Screen </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    marginHorizontal: 30,
  },
  center: {
    textAlign: "center",
    marginVertical: 10,
  },
  creamText:{
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
  },
  button: {
    alignItems: "center",
    backgroundColor: "#800000",
    padding: 10,
    marginTop:20,
    marginBottom:10,
    marginRight:15,
  }
});

export default ProfileView;
