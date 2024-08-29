import RoundButton from "@/components/RoundButton";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.mainView}>
      <RoundButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
