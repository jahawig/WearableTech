import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Running Trial",
    date: "1/14/2022",
    danger: "High"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Jumping Trial",
    date: "1/21/2022",
    danger: "Medium"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Walking Trial",
    date: "1/28/2022",
    danger: "Low"
  },
];
// <TouchableOpacity onPress={() => this.props.navigation.navigate("Data1")}><Text>Open Data</Text></TouchableOpacity>
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.title, textColor]}>Date: {item.date}</Text>
    <Text style={[styles.title, textColor]}>Danger Level: {item.danger}</Text>
    
  </TouchableOpacity>
);

const ViewPastData = () => {
  const [selectedId, setSelectedId] = useState("bd7acbea-c1b1-46c2-aed5-3ad53abb28ba");
  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#79200D" : "#F08080";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.intro}> Select one of the below to view your data! </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  intro: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: '#660000',
    fontSize: 25,
  },
});

export default ViewPastData;