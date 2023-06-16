import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function Tela3() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Images/asia.png')} style={styles.imgFundo}>
        <Text style={styles.texto}>
          Ásia: Continente com megacidades modernas, monumentos históricos e
          belas paisagens naturais.
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
