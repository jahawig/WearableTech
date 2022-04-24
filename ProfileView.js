import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

// Will have to think about if bottom tab navigation is the best choice
// Maybe having another stack is not a bad idea. This it would be easier to implement a button system.


class ProfileView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("Mounting");
    // this.get_data();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Button
            title="Record New Data"
            onPress={() => this.props.navigation.navigate('Record New Data')}
          />
          <Button
            title="View Past Data"
            onPress={() => this.props.navigation.navigate('Past Data View')}
          />
          <Text style = {styles.center}> Testing </Text>
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
    fontSize: 28,
  },
  smallBold: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 18,
  }
});

export default ProfileView;
