//** Aqui es donde se mostrara si encuentra o no mentor  */

import { useGlobalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Stack } from "expo-router";
import CardMentor from "@/app/components/compraCurso/CardMentor";
import Mentores from "@/app/components/Mentores";
import {
  formatDate,
  formatTime,
} from "@/app/components/calendario/FormatoDefechas";
import { GlobalContext } from "@/context/GlobalProvider";

const MuestraMentor = () => {
  /* Curso descripcion almacena los valores de curso, fechas y objetivos */

  const cursoDescription = useGlobalSearchParams();

  const [mentorsWithTime, setMentorsWithTime] = useState([]);
  const [mentorsWithoutTime, setMentorsWithoutTime] = useState([]);

  const { setUserData } = useContext(GlobalContext);

  const horaDate = new Date(cursoDescription.hora);
  const time = formatTime(horaDate);

  const fechaDate = new Date(cursoDescription.fecha);
  const date = formatDate(fechaDate);

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

  const almacenarDatos = (fecha, hora, curse) => {
    setUserData((prev) => ({
      ...prev,
      curso: {
        fecha: fecha,
        hora: hora,
        objetivo: curse.objetivo,
        curso: curse.curso,
        mentor: curse.mentor,
      },
    }));
  };

  useEffect(() => {
    searchMentors(cursoDescription.curso, time);
  }, []);

  useEffect(() => {
    almacenarDatos(date, time, cursoDescription);
  }, []);

  return (
    <ScrollView>
      <View>
        <Stack.Screen options={{ title: "" }} />
        {mentorsWithTime.length ? (
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>¡EnHorabuena!</Text>
              <Text style={{ fontSize: 20 }}>
                ¡Encontramos a los siguientes mentores! De acuerdo a tus
                horarios!
              </Text>
            </View>
            <View style={styles.mentorContainer}>
              {mentorsWithTime.map((item, index) => (
                <CardMentor key={index} props={item} disable={false} />
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
                Sin embargo puedes analizar estos horarios propuestos por
                nuestros mentores disponibles de acuerdo al tema :
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                {cursoDescription.curso}
              </Text>
            </View>
            <View style={styles.mentorContainer}>
              {mentorsWithoutTime.map((item, index) => (
                <CardMentor key={index} props={item} disable={true} />
              ))}
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
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default MuestraMentor;
