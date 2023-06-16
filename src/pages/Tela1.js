import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function Tela1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Images/africa.png')} style={styles.imgFundo}>
        <Text style={styles.texto}>
          África: Continente com rica diversidade cultural, paisagens
          impressionantes e vida selvagem única.
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
