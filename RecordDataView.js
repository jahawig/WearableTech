import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

class ExercisesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selected1: false,
      selected2: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Data Collection Checklist</Text>
          <CheckBox
            title='Are your sensors on and ready to  pair with your device?'
            checked={this.state.selected}
            onPress={() => this.setState({ selected: !this.state.selected })}
          />
          
          <CheckBox
            title='Are your sensors fully charged?'
            checked={this.state.selected1}
            onPress={() => this.setState({ selected1: !this.state.selected1 })}
          />

          <CheckBox
            title='Are the sensors outfitted in the athletic sleeve and fitted tight to your leg?'
            checked={this.state.selected2}
            onPress={() => this.setState({ selected2: !this.state.selected2 })}
          />

          <TouchableOpacity style={this.state.selected && this.state.selected1 && this.state.selected2 ? styles.smallBold : styles.disabled } onPress={() => this.props.navigation.navigate("Calibration") }>
            <Text style={styles.creamText}>Begin Calibration</Text>
          </TouchableOpacity>

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
    borderRadius: 25
  },
  disabled: {
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 60,
    backgroundColor: "gray",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 25
  },
});

export default ExercisesView;
