import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Cards from "./Card";
import { ScrollView } from "react-native-gesture-handler";
import { fetchData } from "../../services/API";
import Placeholder from "./SkeletonCard";
import { GlobalContext } from "@/context/GlobalProvider";

const Carrusel = () => {
  const { cursos, setCursos } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { userData } = React.useContext(GlobalContext);

  const newData = React.useMemo(() => {
    return cursos && cursos.length ? cursos.slice(0, 6) : [];
  }, [cursos]);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(
          "https://www.widolearn.com/index.php?c=Cursos&a=verCursos"
        );
        setCursos(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userData, setCursos]);

  if (loading)
    return (
      <View style={{ marginVertical: 10 }}>
        <Placeholder Loading={loading} />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );

  return (
    <ScrollView style={{ height: 350, flexDirection: "row" }} horizontal={true}>
      {newData.map((data) => (
        <View style={styles.container} key={data.id_curso}>
          <Cards curso={data} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 350,
    flex: 1,
    paddingBottom: 20,
    marginHorizontal: 15,
  },
});

export default Carrusel;
