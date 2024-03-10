//** Aqui es donde se mostrara si encuentra o no mentor  */

import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatTime } from "@/components/calendario/FormatoDefechas";
import CardMentor from "@/components/compraCurso/CardMentor";
import Mentores from "@/components/Mentores";

const MuestraMentor = () => {
  const cursoDescription = useGlobalSearchParams();
  const [mentorsWithTime, setMentorsWithTime] = useState([]);
  const [mentorsWithoutTime, setMentorsWithoutTime] = useState([]);

  const horaDate = new Date(cursoDescription.hora);
  const time = formatTime(horaDate);

  console.log("cursoDescription: ", cursoDescription);

  const searchMentors = (subject, availableTime) => {
    const mentorsWithBoth = Mentores.filter(
      (mentor) =>
        mentor.materias.includes(subject) &&
        mentor.horariosDisponibles.includes(availableTime)
    );

    if (mentorsWithBoth.length > 0) {
      setMentorsWithTime(mentorsWithBoth);
    } else {
      const mentorsWithSubjectOnly = Mentores.filter((mentor) =>
        mentor.materias.includes(subject)
      );
      setMentorsWithoutTime(mentorsWithSubjectOnly);
    }
  };

  useEffect(() => {
    searchMentors(cursoDescription.curso, time);
  }, []);

  return (
    <View>
      {mentorsWithTime.length ? (
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>¡EnHorabuena!</Text>
            <Text style={{ fontSize: 20 }}>
              ¡Encontramos a los siguientes mentores! De acuerdo a tus horarios!
            </Text>
          </View>
          <View style={styles.mentorContainer}>
            {mentorsWithTime.map((item, index) => (
              <CardMentor key={index} props={item} />
            ))}
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>¡Oh no!</Text>
            <Text style={{ fontSize: 20 }}>
              No pudimos encontrar mentores en los horarios elegidos.
            </Text>
            <Text style={{ fontSize: 20 }}>
              Sin embargo puedes analizar estos horarios propuestos por nuestros
              mentores disponibles de acuerdo al tema :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              {cursoDescription.curso}
            </Text>
          </View>
          <View style={styles.mentorContainer}>
            {mentorsWithoutTime.map((item, index) => (
              <CardMentor key={index} props={item} />
            ))}
          </View>
        </View>
      )}
    </View>
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
    flexDirection: "row",
  },
});

export default MuestraMentor;
