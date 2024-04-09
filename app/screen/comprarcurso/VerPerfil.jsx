// import React from "react";
// import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
// import { useGlobalSearchParams } from "expo-router";
// import { Button } from "react-native-paper";
// import ModalConfirmacion from "../../components/compraCurso/ModalConfirmacion";
// import datos from "../../components/datos";
// import CarruselMateriasMentor from "../../components/compraCurso/CarruselMateriasMentor";
// import { Stack } from "expo-router";

// const VerPerfil = () => {
//   const [clases, setClases] = React.useState([]);
//   const perfil = useGlobalSearchParams();

//   const {
//     descripcion,
//     fotoPerfil,
//     horariosDisponibles,
//     materias,
//     nombreCompleto,
//     disable,
//   } = perfil;

//   const materiasSeleccionadas = materias.split(",");
//   const horarios = horariosDisponibles.split(",");

//   const materiasMentor = (materias) => {
//     if (!materias || materias.length === 0) {
//       setClases([]);
//       return;
//     }
//     const materiasFiltradas = datos.filter((materia) =>
//       materias.some((materiaBuscada) => materia.title.includes(materiaBuscada))
//     );
//     setClases(materiasFiltradas);
//   };

//   React.useEffect(() => {
//     materiasMentor(materiasSeleccionadas);
//   }, [materias]);

//   return (
//     <ScrollView>
//       <Stack.Screen options={{ title: "" }} />
//       <View style={styles.container}>
//         <Image
//           style={{ width: "100%", height: 400 }}
//           source={{ uri: fotoPerfil }}
//         />
//         <View style={styles.linear}>
//           <Text style={styles.name}>{nombreCompleto}</Text>
//         </View>
//         <View style={styles.descriptionContainer}>
//           <Text style={styles.acercade}>Perfil</Text>
//           <Text style={styles.descripcion}>{descripcion}</Text>
//         </View>
//         <View>
//           <Text style={styles.subtitle}>Cursos que imparte este mentor: </Text>
//           <CarruselMateriasMentor props={clases} />
//         </View>
//         <View>
//           <Text style={styles.subtitle}>Horarios:</Text>
//           <View style={styles.containerHorarios}>
//             {horarios.map((horario, index) => (
//               <Button
//                 key={index}
//                 labelStyle={{ color: "#FFFFFF" }}
//                 style={styles.button1}
//                 onPress={() => console.log("Botton desactivado")}
//                 disabled={Boolean(disable)}
//               >
//                 {horario}
//               </Button>
//             ))}
//           </View>
//         </View>
//         <View style={{ marginVertical: 25, alignItems: "center" }}>
//           <ModalConfirmacion props={nombreCompleto} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   linear: {
//     textAlign: "center",
//     borderBottomWidth: 1,
//     borderColor: "black",
//     width: "80%",
//     marginHorizontal: "9.5%",
//   },
//   name: {
//     textAlign: "center",
//     fontWeight: "600",
//     fontSize: 25,
//     marginVertical: 20,
//   },
//   descriptionContainer: {
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   acercade: {
//     fontSize: 20,
//     fontWeight: "500",
//   },
//   descripcion: {
//     fontSize: 20,
//     marginVertical: 10,
//     fontWeight: "300",
//   },
//   subtitle: {
//     marginHorizontal: 10,
//     marginVertical: 20,
//     fontSize: 20,
//   },
//   button1: {
//     width: "40%",
//     borderRadius: 10,
//     margin: "3%",
//     backgroundColor: "#24a0ed",
//   },
//   containerHorarios: {
//     flex: 1,
//     flexWrap: "wrap",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
// });

// export default VerPerfil;
