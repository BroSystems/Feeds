import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default (TopLeftProfilePost = props => {
  return (
    <View styles={styles.card}>
      <View styles={styles.top}>
        <View style={styles.image} />
        <View>
          <Text style={styles.title}>{"Title"}</Text>
          <Text style={styles.subtitle}>{"Subtitle"}</Text>
        </View>
      </View>
      <Text style={styles.bottomText}> {"TopLeftProfilePost"} </Text>
    </View>
  );
});

const styles = {
  card: {
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  },
  top: {
    alignContent: "row"
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#000000"
  },
  title: {
    fontSize: 20,
    textAlign: "right",
    margin: 10
  },
  subtitle: {
    fontSize: 15,
      textAlign: "right",
    margin: 10
  },
  bottomText: {}
};
