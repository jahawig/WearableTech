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
          <Text style={styles.title}>Movement 1: Lateral Leg Movement</Text>
          <Text style={styles.center}>Move your leg out and to the side and repeat this motion 3 times.</Text>
          <CheckBox
            title='Finished Movement 1?'
            checked={this.state.selected}
            onPress={() => this.setState({ selected: !this.state.selected })}
          />

          <Text style={styles.title}>Movement 2: Leg Cycling Movement</Text>
          <Text style={styles.center}>Pretend as if you are riding a bicycle.</Text>
          <Text style={styles.center}>Lift one leg off the grown and complete this motion for each leg 3 times.</Text>
          <CheckBox
            title='Finished Movement 2?'
            checked={this.state.selected1}
            onPress={() => this.setState({ selected1: !this.state.selected1 })}
          />


          <TouchableOpacity style={this.state.selected && this.state.selected1 ? styles.smallBold : styles.disabled} onPress={() => this.props.navigation.navigate("Good")}>
            <Text style={styles.creamText}>Begin Calibration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.state.selected && this.state.selected1 && false ? styles.smallBold : styles.disabled} onPress={() => this.props.navigation.navigate("Bad")}>
            <Text style={styles.creamText}>Calibration Errors</Text>
          </TouchableOpacity>

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
    fontWeight: "bold"
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
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 30,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  creamText: {
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
