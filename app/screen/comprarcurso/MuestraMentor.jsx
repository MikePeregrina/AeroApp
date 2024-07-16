//** Aqui es donde se mostrara si encuentra o no mentor  */

import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import CardMentor from "@/app/components/compraCurso/CardMentor";
import { fetchData } from "@/app/services/API";
import { groupMentorSchedules } from "../../utils/groupMentorSchedules";
import SkeletonCard from "@/app/components/carrusel/SkeletonCard";

const MuestraMentor = () => {
  const [mentor, setMentor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cursoDescription = useGlobalSearchParams();
  const { id_curso } = cursoDescription;

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await fetchData(
          `https://www.widolearn.com/index.php?c=Docentes&a=verMentoresporIdCursos&cursoId=${id_curso}`
        );
        if (res.error) {
          setError("Error in response:", res.error);
        } else {
          const groupMentor = groupMentorSchedules(res);
          setMentor(groupMentor);
        }
      } catch (error) {
        setError("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, []);

  if (loading)
    return (
      <View>
        <Stack.Screen options={{ title: "" }} />
        <View style={{ marginTop: 50 }}>
          <SkeletonCard Loading={loading} />
        </View>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );

  return (
    <ScrollView>
      <View>
        <Stack.Screen options={{ title: "" }} />
        {mentor.length ? (
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>¡EnHorabuena!</Text>
              <Text style={{ fontSize: 20 }}>
                Mentores disponibles para el curso :
              </Text>
              <Text style={{ fontSize: 21, fontWeight: 700 }}>
                {cursoDescription.curso}
              </Text>
            </View>
            <View style={styles.mentorContainer}>
              {mentor.map((item, index) => (
                <CardMentor key={index} props={item} disable={false} />
              ))}
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>¡Oh no!</Text>
              <Text style={{ fontSize: 20 }}>No hay mentores disponibles.</Text>
              <Text style={{ fontSize: 20, marginVertical: 10 }}>
                Porfavor comunicate con nosotros para poder accesorate y
                brindarte una opcion adecuada a tus necesidades.
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Curso Seleccionado {cursoDescription.curso}
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    padding: 15,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 15,
  },
  mentorContainer: {
    flex: 1,
  },
});

export default MuestraMentor;
