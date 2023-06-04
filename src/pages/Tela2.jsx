import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const imgAfrica = "../../assets/imagens/americas.png";

export default function Tela1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(imgAfrica)} style={styles.imgFundo}>
        <Text style={styles.texto}>
          Américas: Continente com diversidade cultural, paisagens variadas e
          rica biodiversidade.
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