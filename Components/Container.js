import { StyleSheet, Text, View } from "react-native";
import Image from "next/image";

export function Container({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 1280,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
