import React from "react";
import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import tw from "twrnc";
import { Button } from "react-native-paper";
import TextInput from "../../../components/login/TextInput";
import { router, Stack, useGlobalSearchParams } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

const ObjetivoUsuario = () => {
  const data = useGlobalSearchParams();
  const [selected1, setSelected1] = React.useState("Si");
  const [curso, setCurso] = React.useState(data.curso);
  const [selected2, setSelected2] = React.useState("");

  const SignupSchema = Yup.object().shape({
    objetivo: Yup.string()
      .min(2, "Campo demasiado corto!")
      .max(50, "Campo demasiado largo!")
      .required("Campo Requerido"),
  });

  const submitForm = (data) => {
    for (let value in data) {
      if (data[value] === "") {
        delete data[value];
      }
    }
    router.navigate({
      pathname: "/screen/comprarcurso/SelectFecha",
      params: data,
    });
  };

  const validation = [
    { key: "1", value: "Si" },
    { key: "2", value: "No" },
  ];

  const tipo = [
    { key: "1", value: "Hijo" },
    { key: "2", value: "Sobrino" },
    { key: "2", value: "Familiar" },
    { key: "2", value: "Otro" },
  ];

  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <View>
        <Text style={tw`text-center my-8 font-bold text-lg text-[#03283A]`}>
          Objetivos del usuario
        </Text>
      </View>
      <Formik
        initialValues={{
          objetivo: "",
          edad: "",
          nombre: "",
          curso,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit }) => (
          <View>
            <Text style={tw`text-gray-800 mx-5`}>Este curso es para ti?</Text>
            <View style={tw`items-center my-5`}>
              <SelectList
                setSelected={(val) => setSelected1(val)}
                data={validation}
                save="value"
                maxHeight={100}
                boxStyles={tw`w-60`}
              />
            </View>
            {selected1 === "Si" ? null : (
              <View>
                <Text style={tw`text-gray-800 mx-5 mt-5`}>
                  Para quien es el curso?
                </Text>
                <View style={tw`items-center my-5`}>
                  <SelectList
                    setSelected={(val) => setSelected2(val)}
                    data={tipo}
                    save="value"
                    maxHeight={100}
                    boxStyles={tw`w-60`}
                  />
                  <View style={tw`items-center w-60`}>
                    <TextInput
                      name="nombre"
                      label="Nombre"
                      returnKeyType="next"
                      onChangeText={handleChange("nombre")}
                      onBlur={handleBlur("nombre")}
                    />
                    <TextInput
                      name="edad"
                      label="Edad"
                      returnKeyType="next"
                      onChangeText={handleChange("edad")}
                      onBlur={handleBlur("edad")}
                    />
                  </View>
                </View>
              </View>
            )}
            <View>
              <Text style={tw`mx-5 my-5`}>
                ¿Cuál es tu objetivo de aprender?
              </Text>
              <View style={tw`w-60 mx-auto`}>
                <TextInput
                  name="objetivo"
                  label="Objetivo"
                  returnKeyType="next"
                  onChangeText={handleChange("objetivo")}
                  onBlur={handleBlur("objetivo")}
                />
              </View>
            </View>
            <View style={tw`w-60 mx-auto my-15`}>
              <Button
                onPress={handleSubmit}
                style={tw`bg-[#2196f3]`}
                labelStyle={tw`text-white`}
              >
                Siguiente
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ObjetivoUsuario;
