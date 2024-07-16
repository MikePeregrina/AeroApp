import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuComponent from "./MenuComponent";
import { Button } from "react-native-paper";
import tw from "twrnc";
import MenuDeslizable from "./MenuDeslizable";

export default function DrawerLayout() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button style={tw`absolute z-20`}>Hola</Button>
      <View
        style={tw`absolute bg-[#FFFFFF] top-2 right-0 w-52 border-2 z-10 h-auto border-black`}
      >
        <View>
          <Text style={tw`p-3 my-5`}>Menu del layout</Text>
        </View>
        <MenuDeslizable />
      </View>
    </>
  );
}
