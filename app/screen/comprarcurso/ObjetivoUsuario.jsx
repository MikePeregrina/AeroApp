import React from "react";
import { ScrollView, Text, View } from "react-native";

import tw from "twrnc";
import { Button } from "react-native-paper";
import TextInput from "../../components/login/TextInput";
import { router, Stack, useGlobalSearchParams } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "@/app/components/compraCurso/Select";

const ObjetivoUsuario = () => {
  const data = useGlobalSearchParams();
  const [selected1, setSelected1] = React.useState("Si");
  const [curso, setCurso] = React.useState(data.curso);
  const [selected2, setSelected2] = React.useState("");

  const handleSelect1 = (selectItems) => {
    setSelected1(selectItems);
  };
  const handleSelect2 = (selectItems) => {
    setSelected2(selectItems);
  };

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
    { value: "Si", label: "Si" },
    { value: "No", label: "No" },
  ];

  const tipo = [
    { value: "Hijo", label: "Hijo" },
    { value: "Sobrino", label: "Sobrino" },
    { value: "Familiar", label: "Familiar" },
    { value: "Otro", label: "Otro" },
  ];

  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw` h-full`}>
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
                <View style={tw`w-80`}>
                  <Select data={validation} onSelectChange={handleSelect1} />
                </View>
              </View>
              {selected1 === "Si" ? null : (
                <View>
                  <Text style={tw`text-gray-800 mx-5 mt-5`}>
                    Para quien es el curso?
                  </Text>
                  <View style={tw`items-center my-5`}>
                    <View style={tw`w-80`}>
                      <Select data={tipo} onSelectChange={handleSelect2} />
                    </View>
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
    </ScrollView>
  );
};

export default ObjetivoUsuario;
