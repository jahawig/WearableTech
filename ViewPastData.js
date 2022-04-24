import React from "react";
import { Alert, Modal, Pressable, StyleSheet, TextInput, Button, View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

class ExercisesView extends React.Component {

  constructor(props) {
    super(props);
    // Absolutley can not have mis matched type in here, getting lots of issues when I have a float value and not string for any of the goal values.
    // Initialize empty ar
    this.state = {
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.center}>Screen: Past Data</Text>
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#660000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#660000",
  },
  buttonClose: {
    backgroundColor: "#660000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  smallBold: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  mediumBold: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 28,
  },
});

export default ExercisesView;
