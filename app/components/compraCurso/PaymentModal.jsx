import React from "react";
import { Modal, View, Text, TouchableOpacity, Linking } from "react-native";

const PaymentModal = ({ visible, onClose, mentorData, curso }) => {
  const handlePaymentOption = async (option) => {
    if (option === "single") {
      Linking.openURL("https://buy.stripe.com/fZefZg4CJ0OX8ZG002"); // Pago único
    } else if (option === "installments") {
      Linking.openURL("https://buy.stripe.com/7sI8wOc5b1T18ZG145"); // Pago parcial
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Elige tu forma de pago</Text>
          </TouchableOpacity>
          <View style={styles.paymentOptions}>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePaymentOption("single")}
            >
              <Text style={{ color: "#FFFFFF" }}>Pago único</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePaymentOption("installments")}
            >
              <Text style={{ color: "#FFFFFF" }}>Pago en partes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  closeText: {
    fontSize: 16,
    color: "#000000",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalParagraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
  },
  paymentOption: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
};

export default PaymentModal;
