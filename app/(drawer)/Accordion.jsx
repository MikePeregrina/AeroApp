import { GlobalContext } from "@/context/GlobalProvider";
import { Link, router } from "expo-router";
import * as React from "react";
import { Text, View } from "react-native";
import { Button, List } from "react-native-paper";

const MyComponent = () => {
  const { eliminarDatosUsuario } = React.useContext(GlobalContext);
  const [expanded, setExpanded] = React.useState(true);

  const { userData, cursos } = React.useContext(GlobalContext);

  const programacion = cursos.filter(
    (cursor) => cursor.tipo === "programacion"
  );

  const administracion = cursos.filter(
    (cursor) => cursor.tipo === "administracion"
  );

  const videojuegos = cursos.filter((cursor) => cursor.tipo === "videojuegos");

  const dibujo = cursos.filter(
    (cursor) => cursor.tipo === "dibujo-ilustracion"
  );

  const handlePress = () => setExpanded(!expanded);

  const navigate = () => {
    router.navigate({
      pathname: "/(tabs)/MisClases",
    });
  };

  return (
    <>
      <List.Section title="">
        <List.Accordion
          title="Cursos"
          left={(props) => <List.Icon {...props} icon="monitor" />}
          style={{ marginTop: 10 }}
        >
          <List.Accordion
            title="Area de Programacion"
            left={(props) => <List.Icon {...props} icon="code-braces" />}
          >
            {programacion.map((data, index) => (
              <View key={index}>
                <List.Item
                  title={data.nombre}
                  onPress={() => {
                    router.navigate({
                      pathname: "/screen/comprarcurso/HomeCursoSreen",
                      params: data,
                    });
                  }}
                />
              </View>
            ))}
          </List.Accordion>
          <List.Accordion
            title="Area de Administracion"
            left={(props) => <List.Icon {...props} icon="account-cog" />}
          >
            {administracion.map((data, index) => (
              <View key={index}>
                <List.Item
                  title={data.nombre}
                  onPress={() => {
                    router.navigate({
                      pathname: "/screen/comprarcurso/HomeCursoSreen",
                      params: data,
                    });
                  }}
                />
              </View>
            ))}
          </List.Accordion>
          <List.Accordion
            title="Area de Videojuegos"
            left={(props) => <List.Icon {...props} icon="gamepad-variant" />}
          >
            {videojuegos.map((data, index) => (
              <View key={index}>
                <List.Item
                  title={data.nombre}
                  onPress={() => {
                    router.navigate({
                      pathname: "/screen/comprarcurso/HomeCursoSreen",
                      params: data,
                    });
                  }}
                />
              </View>
            ))}
          </List.Accordion>
          <List.Accordion
            title="Area de Diseño y Dibujo"
            left={(props) => <List.Icon {...props} icon="palette" />}
          >
            {dibujo.map((data, index) => (
              <View key={index}>
                <List.Item
                  title={data.nombre}
                  onPress={() => {
                    router.navigate({
                      pathname: "/screen/comprarcurso/HomeCursoSreen",
                      params: data,
                    });
                  }}
                />
              </View>
            ))}
          </List.Accordion>
        </List.Accordion>

        <List.Accordion
          title="Asesorias"
          left={(props) => <List.Icon {...props} icon="infinity" />}
          onPress={handlePress}
        >
          <List.Item title="Matematicas" />
          <List.Item title="Fisica" />
        </List.Accordion>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
            marginVertical: 10,
            marginHorizontal: "auto",
          }}
        ></Text>
        {userData && userData.datos ? (
          <View style={{ marginTop: "auto" }}>
            <List.Item
              title="Mi ruta"
              left={(props) => <List.Icon {...props} icon="star" />}
              onPress={navigate}
            />
            <List.Item
              title={userData.datos.nombre}
              style={{ alignItems: "center", padding: 20 }}
            />
            <Button
              style={{ marginTop: "auto" }}
              onPress={eliminarDatosUsuario}
            >
              Cerrar Sesion{" "}
            </Button>
          </View>
        ) : (
          <Link href={"/screen/login/LoginScreen"}>Iniciar sesion</Link>
        )}
      </List.Section>
    </>
  );
};

export default MyComponent;
/**
 * 
 *   <List.Item
            title="Area de Videojuegos"
            left={(props) => <List.Icon {...props} icon="gamepad-variant" />}
          />
          <List.Item
            title="Area de Diseño y Dibujo"
            left={(props) => <List.Icon {...props} icon="palette" />}
          />
          <List.Item
            title="Area de Ingeria"
            left={(props) => <List.Icon {...props} icon="tools" />}
          />
          <List.Item
            title="Area de Administracion"
            left={(props) => <List.Icon {...props} icon="account-cog" />}
          />
          <List.Item
            title="Emprendimiento e innovacion"
            left={(props) => <List.Icon {...props} icon="lightbulb" />}
          />
          <List.Item
            title="Otras Areas"
            left={(props) => <List.Icon {...props} icon="dots-horizontal" />}
          />
 */
