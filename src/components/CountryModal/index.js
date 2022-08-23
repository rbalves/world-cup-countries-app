import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { DataTable } from "react-native-paper";

import Layout from "../Layout";

const CountryModal = ({ country, modalVisible, setModalVisible }) => {
  const { region, capital, population, languages, currencies } = country;

  const countryInfo = { region, capital, population, languages, currencies };

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      F
    >
      <Layout>
        <View style={{ marginTop: 12 }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {country.name}
            </Text>
          </View>
          <View>
            <DataTable>
              {Object.entries(countryInfo).map(([key, value]) =>
                value ? (
                  <DataTable.Row key={key}>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        {key}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <Text>{value}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ) : null
              )}
            </DataTable>
          </View>
          <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CountryModal;
