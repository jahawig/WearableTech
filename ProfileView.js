import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

// Will have to think about if bottom tab navigation is the best choice
// Maybe having another stack is not a bad idea. This it would be easier to implement a button system.


class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    // Absolutley can not have mis matched type in here, getting lots of issues when I have a float value and not string for any of the goal values.
    this.state = {
      firstName: "",              // Optional
      lastName: "",               // Optional
      goalDailyCalories: "0",       // Optional
      goalDailyProtein: "0",        // Optional
      goalDailyCarbohydrates: "0",  // Optional
      goalDailyFat: "0",            // Optional
      goalDailyActivity: "0",       // Optional
    }
  }

  get_data = async () => {
    // console.log("Entered");
    fetch('https://cs571.cs.wisc.edu/users/' + this.props.username, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': this.props.token
      }
    })
      .then(res => res.json())
      .then(res => {
        //data = JSON.parse(JSON.stringify(res));
        // console.log(JSON.parse(JSON.stringify(res)).goalDailyCalories);
        this.setState({ firstName: JSON.parse(JSON.stringify(res)).firstName });
        this.setState({ lastName: JSON.parse(JSON.stringify(res)).lastName });
        // console.log("Testing");
        // console.log(JSON.parse(JSON.stringify(res)).goalDailyCalories);
        this.setState({ goalDailyCalories: '' + JSON.parse(JSON.stringify(res)).goalDailyCalories });
        this.setState({ goalDailyProtein: '' + JSON.parse(JSON.stringify(res)).goalDailyProtein });
        this.setState({ goalDailyCarbohydrates: '' + JSON.parse(JSON.stringify(res)).goalDailyCarbohydrates });
        this.setState({ goalDailyFat: '' + JSON.parse(JSON.stringify(res)).goalDailyFat });
        this.setState({ goalDailyActivity: '' + JSON.parse(JSON.stringify(res)).goalDailyActivity });
      }
      );
  }

  componentDidMount() {
    // console.log("Mounting");
    this.get_data();
  }

  updateData = async () => {
    fetch('https://cs571.cs.wisc.edu/users/' + this.props.username, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': this.props.token
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        goalDailyCalories: this.state.goalDailyProtein,
        goalDailyProtein: this.state.goalDailyProtein,
        goalDailyCarbohydrates: this.state.goalDailyCarbohydrates,
        goalDailyFat: this.state.goalDailyFat,
        goalDailyActivity: this.state.goalDailyActivity,
      })
    })
      .then(res => {
        if(res.status == 200){
          alert("Data succesfully saved. When you log back in you will your data is saved.");
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <Text style={styles.title}>About You</Text>
          <Text style={styles.center}>Let's get to know you!</Text>
          <Text style={styles.center}>Specify your information below.</Text>

          <Text style={styles.header}>Personal Information</Text>
          <Text style={styles.smallBold}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.firstName}
            onChangeText={(fname) => this.setState({ firstName: fname })}
            value={this.state.firstName}
          />
          <Text style={styles.smallBold}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.lastName}
            onChangeText={(lname) => this.setState({ lastName: lname })}
            value={this.state.lastName}
          />

          <Text style={styles.header}>Fitness Goals</Text>
          <Text style={styles.smallBold}>Daily Calories (kcal)</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.goalDailyCalories}
            onChangeText={(cals) => this.setState({ goalDailyCalories: cals })}
            value={this.state.goalDailyCalories}
          />

          <Text style={styles.smallBold}>Daily Protein (grams)</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.goalDailyProtein}
            onChangeText={(pro) => this.setState({ goalDailyProtein: pro })}
            value={this.state.goalDailyProtein}
          />

          <Text style={styles.smallBold}>Daily Carbs (grams)</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.goalDailyCarbohydrates}
            onChangeText={(carbs) => this.setState({ goalDailyCarbohydrates: carbs })}
            value={this.state.goalDailyCarbohydrates}
          />

          <Text style={styles.smallBold}>Daily Fat (grams)</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.goalDailyFat}
            onChangeText={(fat) => this.setState({ goalDailyFat: fat })}
            value={this.state.goalDailyFat}
          />

          <Text style={styles.smallBold}>Daily Activity (mins)</Text>
          <TextInput
            style={styles.input}
            placeholder= {this.state.goalDailyActivity}
            onChangeText={(active) => this.setState({ goalDailyActivity: active })}
            value={this.state.goalDailyActivity}
          />

          <Text style={styles.header}>Looks good! All set?</Text>
          <Button title="Save Profile" onPress={this.updateData} />
          <Text style={styles.center}>Screen: ProfileView</Text>
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
