import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";

class ExercisesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default ExercisesView;
