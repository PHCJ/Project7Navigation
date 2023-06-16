import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function Tela5() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Images/oceania.png")}
        style={styles.imgFundo}
      >
        <Text style={styles.texto}>
          Oceania: Continente com paisagens deslumbrantes, praias paradisíacas e
          cultura indígena diversificada.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgFundo: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    padding: 50,
  },
  texto: {
    fontSize: 20,
    textAlign: "justify",
  },
});
