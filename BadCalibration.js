import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          <Text style={styles.title}>Calibration: Unsuccessful</Text>
          <Ionicons
            style={styles.center}
            name={'alert-outline'}
            size={100}
          />
          <Text>An error was encountered during your Calibration</Text>
           <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Record New Data')}>
            <Text style={styles.creamText}>Recalibrate</Text>
          </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#800000",
    padding: 10,
    marginTop:20,
    marginBottom:10,
    marginRight:15,
    borderRadius: 25
  },
  creamText:{
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff1d0",
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 30,
  },
});

export default ExercisesView;
