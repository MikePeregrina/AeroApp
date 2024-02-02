import { Button, Text, View } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hello word</Text>
      <Button
        title="Go back to Home Screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default DetailsScreen;
