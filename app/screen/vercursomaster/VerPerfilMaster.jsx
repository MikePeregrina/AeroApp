import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import TextwithNBorder from "@/app/components/perfil/TextwithNBorder";
import { fetchData } from "@/app/services/API";
import CardCursosMentor from "@/app/components/carrusel/CardCursosMentor";

const baseUrl = "https://widolearn.com/public/images/docente/";

const VerPerfilMaster = () => {
  const [mentor, setMentor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mentorDescription = useGlobalSearchParams();
  const { Mentor_ID } = mentorDescription;

  function combinarMentores(mentores) {
    const resultado = {};

    mentores.forEach((mentor) => {
      const mentorId = mentor.Mentor_ID;

      if (resultado[mentorId]) {
        resultado[mentorId].Cursos.push({
          id_curso: mentor.id_curso,
          Curso: mentor.Curso,
          CursoFoto: mentor.CursoFoto,
          TipoCurso: mentor.TipoCurso,
          pdf: mentor.pdf,
          precio: mentor.precio,
        });
      } else {
        resultado[mentorId] = {
          Mentor_ID: mentor.Mentor_ID,
          Mentor: mentor.Mentor,
          MentorFoto: mentor.MentorFoto,
          MentorAcerca: mentor.MentorAcerca,
          Area: mentor.Area,
          Correo: mentor.Correo,
          Tipo: mentor.Tipo,
          Horario_Disponibilidad: mentor.Horario_Disponibilidad,
          Notificacion_Cel: mentor.Notificacion_Cel,
          Cursos: [
            {
              id_curso: mentor.id_curso,
              Curso: mentor.Curso,
              CursoFoto: mentor.CursoFoto,
              TipoCurso: mentor.TipoCurso,
              pdf: mentor.pdf,
              precio: mentor.precio,
            },
          ],
        };
      }
    });

    return Object.values(resultado);
  }

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        setLoading(true); // Empezar la carga
        setError(null); // Resetear el error

        const result = await fetchData(
          `https://www.widolearn.com/index.php?c=Docentes&a=informacionMentorAppId&idCurso=${Mentor_ID}`
        );

        if (Array.isArray(result)) {
          const data = combinarMentores(result);
          setMentor(data);
        } else {
          throw new Error("Los datos recibidos no son un array");
        }
      } catch (err) {
        setError(err.message); // Guardar el mensaje de error
        setMentor([]); // Asegurarse de que mentor sea un array vacío en caso de error
      } finally {
        setLoading(false); // Terminar la carga
      }
    };

    fetchMentorData();
  }, [Mentor_ID]);

  const mentorData = mentor[0] || {};
  const cursos = mentorData.Cursos || [];

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={tw`bg-[#FFFFFF]`}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <View style={tw`w-full h-125 absolute`}>
          <Image
            source={require("../../assets/images/app-elementos-09.png")}
            style={styles.background}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text
              style={tw`text-[#FEC400] font-bold text-lg ml-auto mr-[16%] mt-23`}
            >
              PORTAL DE {mentorData.Mentor || "Nombre del Mentor"}
            </Text>
            <View style={tw`w-65 h-47 ml-auto mr-12 rounded-xl my-8 z-50`}>
              <Image
                style={tw`w-full h-full rounded-xl`}
                source={{
                  uri: `${baseUrl}${mentorData.MentorFoto}/${mentorData.MentorFoto}-description.png`,
                }}
                resizeMode="cover"
              />
            </View>
            <View style={tw`ml-10`}>
              <TextwithNBorder
                name={mentorData.Mentor || "Nombre del Mentor"}
                descripcion={
                  mentorData.MentorAcerca || "Descripción del Mentor"
                }
              />
            </View>
          </View>
          <View style={tw`relative top-[-48px] w-full h-full`}>
            <View>
              <Text style={tw`mx-10 font-bold text-[1rem]`}>
                ¿Qué otros cursos imparte{" "}
                {mentorData.Mentor || "Nombre del Mentor"}?
              </Text>
            </View>
            <View style={tw`my-5`}>
              <View style={tw`bg-[#D7F9FF] py-5`}>
                <ScrollView
                  style={{ height: 350, flexDirection: "row" }}
                  horizontal={true}
                >
                  {cursos.length > 0 ? (
                    cursos.map((curso) => (
                      <View style={styles.container} key={curso.id_curso}>
                        <CardCursosMentor curso={curso} />
                      </View>
                    ))
                  ) : (
                    <Text style={tw`mx-10`}>No hay cursos disponibles.</Text>
                  )}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "auto",
    height: "100%",
  },
  content: {
    flex: 1,
    position: "relative",
    zIndex: 500,
  },
  container: {
    width: 250,
    height: 350,
    flex: 1,
    paddingBottom: 20,
    marginHorizontal: 15,
  },
});

export default VerPerfilMaster;
