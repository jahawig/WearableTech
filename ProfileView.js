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
          
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Record New Data')}>
            <Text style={styles.header}>Record New Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Past Data View')}>
            <Text style={styles.header}>View Past Data</Text>
          </TouchableOpacity>

          <Ionicons style = {styles.center} name={'person-circle-outline'} size = {80}/>

          <TouchableOpacity style={styles.smallBold} onPress={() => this.props.setAccessToken(false)}>
            <Text style={styles.header}>Log Out</Text>
          </TouchableOpacity>

          <Text style={styles.center}> Screen: ProfileView Screen </Text>
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
  center: {
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    height: 40,
    marginVertical: 10,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 36,
  },
  header: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  smallBold: {
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 60,
    backgroundColor: "#DDDDDD",
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop:20,
    marginBottom:10,
    marginRight:15,
  }
});

export default ProfileView;
