import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import CustomModal from "../CustomModal";
import { formatDate, formatTime } from "./FormatoDefechas";

const Calendario = ({ props }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const data = {
    ...props,
    fecha: date,
    hora: time,
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedDate) => {
    const currentTime = selectedDate || time;
    setTime(currentTime);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: currentMode === "date" ? date : time,
      onChange: currentMode === "date" ? onDateChange : onTimeChange,
      mode: currentMode === "date" ? "date" : "time",
      is24Hour: true, // Display in 24-hour format
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{ marginTop: 20 }}>
          <Button onPress={showDatepicker} title="Seleccionar fecha" />
        </View>
        <Text style={styles.texto}>Fecha seleccionada: {formatDate(date)}</Text>
        <View style={{ marginTop: 20 }}>
          <Button onPress={showTimepicker} title="Selecciona tu hora" />
        </View>
        <Text style={styles.texto}>Hora seleccionada: {formatTime(time)}</Text>
      </View>
      <CustomModal props={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginVertical: 10,
    fontSize: 17,
    fontWeight: "500",
  },
});

export default Calendario;
