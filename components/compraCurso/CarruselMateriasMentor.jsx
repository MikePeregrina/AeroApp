import { Image, ScrollView, View, Text } from "react-native";

const CarruselMateriasMentor = ({ props }) => {
  console.log(props);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={{ flexDirection: "row" }}>
        {props.map((data, index) => (
          <View
            style={{
              borderWidth: 1,
              width: 180,
              height: 200,
              borderRadius: 10,
              marginHorizontal: 20,
            }}
            key={index}
          >
            <View>
              <Image
                style={{
                  width: "100%",
                  height: 100,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={{
                  uri: data.imgUrl,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ margin: 10, fontWeight: "500" }}>
                {data.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CarruselMateriasMentor;
