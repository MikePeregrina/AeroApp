import Recorrido from "@/app/components/cursos/ImagesRoad";
import { fetchData } from "@/app/services/API";
import { GlobalContext } from "@/context/GlobalProvider";
import { Stack, useGlobalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import tw from "twrnc";

const RutaAprendizaje = () => {
  const [credito, setCredito] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { userData } = useContext(GlobalContext);
  const params = useGlobalSearchParams();

  useEffect(() => {
    const loadClase = async () => {
      try {
        if (userData.datos !== null) {
          const resp = await fetchData(
            `https://www.widolearn.com/index.php?c=Usuarios&a=creditosCursos&idUsuario=${userData.datos.idUsuario}&idCurso=${params.idCurso}&idMentor=${params.idMentor}`
          );
          setCredito(resp);
        } else {
          console.log("No hay data");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };

    loadClase();
  }, [userData, params]);

  const obtenerInfo = credito.filter(
    (curso) =>
      curso.Mentor_ID === Number(params.idMentor) &&
      curso.id_curso === Number(params.idCurso)
  );

  const curso = obtenerInfo.length > 0 ? obtenerInfo[0] : null;
  console.log("Data", curso);
  return (
    <ScrollView>
      <View>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "",
          }}
        />
        <View style={tw`items-center`}>
          <View style={tw`w-56 h-56`}>
            <Image
              style={tw`w-full h-full`}
              source={require("@/app/assets/images/logo.png")}
              resizeMode="center"
            />
          </View>
          {loading ? (
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Cargando...</Text>
          ) : curso.creditos != null ? (
            <View>
              <Text style={tw`text-2xl border-b-4 border-b-[#FEC400]`}>
                {curso.nombre_curso}
              </Text>
              <Text style={tw`my-3 text-base`}>
                Total de creditos cursados:
                <Text style={tw`font-bold`}>{curso.cursados}</Text>
              </Text>
              <View>
                <Recorrido
                  creditos={curso.creditos}
                  cursados={curso.cursados}
                />
              </View>
            </View>
          ) : (
            <Text style={{ fontSize: 20, fontWeight: "700" }}>En revisión</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default RutaAprendizaje;
