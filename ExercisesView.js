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
      exercises: [],
      exerciseName: "Enter exercise...",
      duration: "0",
      calBurn: "0",
      delete_id: 0,
      modalVisible: false,
    }
  }

  // Create a fetch (GET) method to get the data from the API
  // When the result comes back (think token with )
  // result.activities will array or list from the api
  // set the state of exercises immediately after.
  getExercises = async () => {
    console.log("Getting exercises");
    fetch('https://cs571.cs.wisc.edu/activities', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': this.props.token
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(JSON.parse(JSON.stringify(res)));
        this.setState({ exercises: JSON.parse(JSON.stringify(res)).activities });
        //console.log(this.state.exercises);
      }
      );
  }

  deleteData(a_id){ (a_id) = async () => {
    console.log("Deleting Data");
    fetch('https://cs571.cs.wisc.edu/activities/' + a_id, {
      method: 'DELETE',
      headers: {
        'x-access-token': this.props.token
      },
    })
      .then(res => {
        console.log("Deleted");
        console.log(res.status);
        this.getExercises();
      });
  }}

  postData = async () => {
    console.log("Posting Data");
    fetch('https://cs571.cs.wisc.edu/activities', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': this.props.token
      },
      body: JSON.stringify({
        name: this.state.exerciseName,
        duration: this.state.duration,
        calories: this.state.calBurn,
      })
    })
      .then(res => {
        console.log("Entered");
        console.log(res.status);
        if (res.status == 200) {
          this.getExercises();
          alert("Data succesfully saved. When you go back to the Exercise screen, you will see your new addition.");
        }
      });

  }

  // Component Did Mount Method (similar to ProfileView)
  // Call method right away
  // Want to call the fetch GET method
  componentDidMount() {
    this.getExercises();
  }

  // activity is a single activity that we can grab name and calburnt 
  // return an html object
  getExerciseCardSingular(activity, index) {
    // Show all information within this card
    // Add edit and delete button
    // Edit button - only point that we will have id 
    // We want the onPress property to call a editExercise - activity.id should be passed as a parameter so we know which exercise to edit or delete it.
    // var date = new Date(activity.date);
    return (
      <View>
        <Card key={activity.id}>
          <Card.Title>Exercise: {activity.name}</Card.Title>
          <Text>Date: {Date(activity.date)}</Text>
          <Text>Calories: {activity.calories}</Text>
          <Text>Duraiton: {activity.duration} minutes</Text>
          <Button title="EDIT" onPress={() => alert("Tapped Edit")} />
          <Button title="DELETE" onPress={this.deleteData(activity.id)} />
        </Card>
      </View>
    );
  }

  getExerciseCards() {
    let exerciseCards = [];
    // Loop through list of exercises
    // Push those into an array we are creating at the top of this method (array_name.push())
    // Call a seperate method to create HTML looking code
    // Than get array at the bottom
    if (this.state.exercises.length == 0) {
      return;
    }
    for (let i = 0; i < this.state.exercises.length; i++) {
      exerciseCards.push(this.getExerciseCardSingular(this.state.exercises[i], i));
    }
    // Creating empty array
    // Loop through and then return array
    return exerciseCards;
  }

  // Hack for adding exercises - picture header syntax 
  // last .then adding new exercise want to fetch this.exercises
  // if we call fetch again then it will happen in real time
  // need to update exercises list



  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Exercises</Text>
          <Text style={styles.center}>Let's get to work!</Text>
          <Text style={styles.center}>Record your exercises below.</Text>

          <Button
            title="Add Exercise"
            onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
          />

          {this.getExerciseCards()}

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({ modalVisible: !this.state.modalVisible });
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.mediumBold}>Exercise Details</Text>
                <Text style={styles.smallBold}> Exercise Name </Text>
                <TextInput
                  style={styles.input}
                  placeholder={this.state.exerciseName}
                  onChangeText={(name) => this.setState({ exerciseName: name })}
                  value={this.state.exerciseName}
                />
                <Text style={styles.smallBold}> Duration (minutes) </Text>
                <TextInput
                  style={styles.input}
                  placeholder={this.state.duration}
                  onChangeText={(time) => this.setState({ duration: time })}
                  value={this.state.duration}
                />
                <Text style={styles.smallBold}> Calories Burnt </Text>
                <TextInput
                  style={styles.input}
                  placeholder={this.state.calBurn}
                  onChangeText={(cal) => this.setState({ calBurn: cal })}
                  value={this.state.calBurn}
                />
                <Text> Looks good! Ready to save your work? </Text>
                <View style={styles.fixToText}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={this.postData}
                  >
                    <Text style={styles.textStyle}>Save Exercise</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
                  >
                    <Text style={styles.textStyle}>Back</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <Text style={styles.center}>Screen: ExercisesView</Text>
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
