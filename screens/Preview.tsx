import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootTabScreenProps } from "../types";

const spend = [{ pic: "", itemName: "吃喝", money: 1 }];

export default function Preview({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>06月06日 星期一</Text>
      {!!spend.length &&
        spend.map((c) => (
          <View>
            <Text>{c.itemName}</Text>
            <Text>{c.money}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  date: {
    fontSize: 12,
    backgroundColor: "#F5F5F5",
    paddingLeft: 16,
    color: "#808080",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
