import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const imgAfrica = "../../assets/imagens/europa.png";

export default function Tela1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(imgAfrica)} style={styles.imgFundo}>
        <Text style={styles.texto}>
          Europa: Continente com riqueza histórica e cultural, cidades icônicas
          e paisagens pitorescas.
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
