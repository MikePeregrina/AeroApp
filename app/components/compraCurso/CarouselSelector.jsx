import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ModalConfirmacion from "./ModalConfirmacion";
import { groupDaysAndTimes } from "../../utils/shared";

const allCarouselItems = [
  { id: "1", value: "Lunes" },
  { id: "2", value: "Martes" },
  { id: "3", value: "Miércoles" },
  { id: "4", value: "Jueves" },
  { id: "5", value: "Viernes" },
  { id: "6", value: "Sábado" },
  { id: "7", value: "Domingo" },
];

const getStartingDayIndex = () => {
  const today = new Date();
  const startingDate = new Date(today);
  startingDate.setDate(today.getDate() + 2);
  return startingDate.getDay();
};

const getAdjustedCarouselItems = (startIndex) => {
  return [
    ...allCarouselItems.slice(startIndex - 1),
    ...allCarouselItems.slice(0, startIndex - 1),
  ];
};

const getDateForDay = (dayIndex, offset) => {
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + offset);
  return targetDate.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  });
};

const CarouselSelector = ({ horarios }) => {
  const flatListRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [carouselItems, setCarouselItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const startIndex = getStartingDayIndex();
    const adjustedCarouselItems = getAdjustedCarouselItems(startIndex).map(
      (item, index) => ({
        ...item,
        date: getDateForDay(startIndex, index),
      })
    );
    setCarouselItems(adjustedCarouselItems);
    setSelectedValue(adjustedCarouselItems[0].value);
    setSelectedDate(adjustedCarouselItems[0].date);
  }, []);

  const fechasAgrupadas = groupDaysAndTimes(horarios.dias_horas);

  const handleItemPress = (item) => {
    setSelectedValue(item.value);
  };

  const renderSelectedDayHours = () => {
    const selectedDay = fechasAgrupadas.find(
      (day) => day.dia_semana === selectedValue
    );

    if (!selectedDay || selectedDay.horas.length === 0) {
      return (
        <View style={styles.hoursContainer}>
          <Text style={styles.noHoursText}>No hay horas disponibles</Text>
        </View>
      );
    }

    return (
      <View style={styles.hoursContainer}>
        {selectedDay.horas.map((hora, index) => (
          <ModalConfirmacion
            key={index}
            hora={hora}
            props={horarios}
            dia={selectedValue}
          />
        ))}
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
          }}
        >
          <Text style={styles.buttonText}>&lt;</Text>
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={carouselItems}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleItemPress(item)}
              style={[
                styles.itemContainer,
                item.value === selectedValue && styles.selectedItemContainer,
              ]}
            >
              <Text
                style={[
                  styles.itemText,
                  item.value === selectedValue && styles.selectedItemText,
                ]}
              >
                {item.value} - {item.date}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          initialScrollIndex={0}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            flatListRef.current.scrollToEnd({ animated: true });
          }}
        >
          <Text style={styles.buttonText}>&gt;</Text>
        </TouchableOpacity>
      </View>
      {renderSelectedDayHours()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#e3f3ff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#0079ff",
    fontSize: 20,
  },
  itemContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItemContainer: {
    borderRadius: 10,
  },
  itemText: {
    color: "#000000",
    fontSize: 16,
  },
  selectedItemText: {
    fontWeight: "bold",
  },
  flatListContent: {
    alignItems: "center",
  },
  selectedValueText: {
    marginTop: 20,
    fontSize: 18,
  },
  noHoursText: {
    margin: 20,
    fontSize: 18,
    color: "gray",
  },
  hourText: {
    marginTop: 10,
    fontSize: 16,
    marginHorizontal: 10,
    color: "black",
  },
  hoursContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

export default CarouselSelector;
