import { fetchData } from "@/app/services/API";
import { GlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import PaymentModal from "../compraCurso/PaymentModal";

const baseUrl = "https://widolearn.com/public/";

const Cards = ({ curso }) => {
  const router = useRouter();
  const [estado, setEstado] = React.useState({});
  const { userData, cursos } = React.useContext(GlobalContext);
  const [name, setName] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    const loadClase = async () => {
      try {
        if (userData && userData.datos !== null) {
          const resp = await fetchData(
            `https://www.widolearn.com/index.php?c=Usuarios&a=getEstado&idUsuario=${userData.datos.idUsuario}&idCurso=${curso.id_curso}`
          );
          setEstado(resp);
        } else {
          setEstado({});
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadClase();
  }, [userData, curso.id_curso]);

  React.useEffect(() => {
    const getButtonLabel = () => {
      if (estado.estado === "empezo") {
        setName("Comprar");
      } else if (estado.estado === "cursando") {
        setName("Comprar Curso");
      } else {
        setName("Clase Muestra");
      }
    };

    getButtonLabel();
  }, [estado]);

  const handleButtonPress = () => {
    if (name === "Comprar" || name === "Comprar Curso") {
      setModalVisible(true);
      console.log("Le diste click");
    } else {
      router.navigate({
        pathname: "/screen/comprarcurso/HomeCursoSreen",
        params: curso,
      });
    }
  };

  return (
    <>
      <Card style={styles.container}>
        <Card.Cover
          style={styles.cardContent}
          source={{ uri: `${baseUrl}${curso.foto}` }}
          resizeMode="stretch"
        />
        <Card.Actions style={styles.cardButtons}>
          <Button
            onPress={handleButtonPress}
            style={styles.buttons}
            labelStyle={styles.buttonText}
          >
            {name}
          </Button>
          <Button style={styles.disableButton}>Temario</Button>
        </Card.Actions>
      </Card>
      <PaymentModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        mentorData={curso}
        curso={curso}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#233532",
    borderRadius: 25,
  },
  cardContent: {
    borderRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: "55%",
  },
  cardButtons: {
    backgroundColor: "#233532",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    width: "80%",
    marginVertical: 10,
    borderColor: "#233532",
    backgroundColor: "#fec400",
  },
  buttonText: {
    fontSize: 15,
    color: "#233532",
    fontWeight: "800",
  },
  disableButton: {
    width: "80%",
    backgroundColor: "#e0dada",
    color: "white",
  },
});

export default Cards;
