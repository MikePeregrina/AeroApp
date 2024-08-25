import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CarouselSelector from "./CarouselSelector";

const baseUrl = "https://widolearn.com/";

const CardMentor = ({ props, disable }) => {
  const { MentorFoto, Mentor } = props;
  const data = { ...props, disable: disable };

  const mentorFoto =
    MentorFoto != ""
      ? `public/images/docente/${MentorFoto}/${MentorFoto}-profile.png`
      : "public/images/docente/blank-profile.png";

  const ArrayCadena = Mentor.split(" ");

  return (
    <View>
      <View style={styles.cardContent}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imgContent}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
              }}
              source={{
                uri: `${baseUrl}${mentorFoto}`,
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>{ArrayCadena[0]}</Text>
          <Button
            onPress={() => {
              router.navigate({
                pathname: "/screen/vercursomaster/VerPerfilMaster",
                params: data,
              });
            }}
            labelStyle={{ color: "#ffffff" }}
            style={styles.button2}
          >
            Ver Perfil
          </Button>
          <CarouselSelector horarios={props} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    width: "85%",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: "auto",
    marginVertical: 8,
    padding: 15,
  },
  imgContent: {
    marginTop: 23,
    marginBottom: 40,
    height: 100,
  },

  name: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
    flexWrap: "wrap",
  },

  button2: {
    width: "90%",
    marginTop: 14,
    borderRadius: 10,
    backgroundColor: "#FAC404",
  },
});

export default CardMentor;
