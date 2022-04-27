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
          <Text style={styles.center}>Screen: Calibration View</Text>
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
  center: {
    textAlign: "center",
    marginVertical: 10,
  },
});

export default ExercisesView;
