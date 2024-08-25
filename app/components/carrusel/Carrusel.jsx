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

  const newData = cursos && cursos.length ? cursos.slice(0, 6) : [];

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
  }, []);

  if (loading) return <Placeholder Loading={loading} />;
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
