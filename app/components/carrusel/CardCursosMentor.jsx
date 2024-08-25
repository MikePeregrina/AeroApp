import { fetchData } from "@/app/services/API";
import { GlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const baseUrl = "https://widolearn.com/public/";

const CardCursosMentor = ({ curso }) => {
  const router = useRouter();
  const [estado, setEstado] = React.useState({});
  const { userData, cursos } = React.useContext(GlobalContext);
  const [name, setName] = React.useState("");

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

  /*const handleOnPress = () => {
    if (estado.estado === "muestra") {
      console.log("Navegar a la clase muestra");
    } else if (estado.estado === "comprar") {
      console.log("Navegar a la compra del curso");
    } else if (estado.estado === "mi curso") {
      console.log("Navegar al curso del usuario");
    }
  };*/

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

  return (
    <Card style={styles.container}>
      <Card.Cover
        style={styles.cardContent}
        source={{ uri: `${baseUrl}${curso.CursoFoto}` }}
        resizeMode="stretch"
      />
      <Card.Actions style={styles.cardButtons}>
        <Button
          onPress={() =>
            router.replace({
              pathname: "/screen/comprarcurso/HomeCursoSreen",
              params: {
                nombre: curso.Curso,
                foto: curso.CursoFoto,
                id_curso: curso.id_curso,
              },
            })
          }
          style={styles.buttons}
          labelStyle={styles.buttonText}
        >
          {name}
        </Button>
        <Button style={styles.disableButton}>Temario</Button>
      </Card.Actions>
    </Card>
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

export default CardCursosMentor;
