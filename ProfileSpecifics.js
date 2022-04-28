import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>ACLTech</Text>
          <Text style={styles.center}>Welcome to your profile settings.</Text>

          <TouchableOpacity style={styles.smallBold} onPress={() => Alert.alert("Your data has been deleted")}>
            <Text style={styles.creamText}>Share Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallBold} onPress={() => Alert.alert("Your data has been deleted")}>
            <Text style={styles.creamText}>Delete Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallBold} onPress={() => this.props.setAccessToken(false)}>
            <Text style={styles.creamText}>Delete Account</Text>
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
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 36,
  },
});

export default ProfileView;
