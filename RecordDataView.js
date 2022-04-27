import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

class ExercisesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selected1: false,
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Data Collection Process</Text>
          <CheckBox
            title='Are your sensors fully charged?'
            checked={this.state.selected}
            onPress={() => this.setState({ selected: !this.state.selected })}
          />

          <CheckBox
            title='Are the sensors outfitted in the athletic sleeve and fitted tight to your leg?'
            checked={this.state.selected1}
            onPress={() => this.setState({ selected1: !this.state.selected1 })}
          />

          <Text style={styles.center}>Screen: Record Data</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 0,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 30,
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
  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },
});

export default ExercisesView;
