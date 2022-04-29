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
        <Text style={styles.center}>Calibration: Successful</Text>
          <Ionicons
            style={styles.center}
            name={'person-circle-outline'}
            size={80}
            onPress={() => this.props.navigation.navigate('Your Profile')}
          />
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
});

export default ExercisesView;
