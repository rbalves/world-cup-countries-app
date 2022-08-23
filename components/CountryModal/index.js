import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { DataTable } from "react-native-paper";

import Layout from "../Layout";

const CountryModal = ({ country, modalVisible, setModalVisible }) => {
  const countryInfo = {
    continent: country.continent.name,
    capital: country.capital,
    population: country.population || 'No information',
    languages: country.languages.map(({ name }) => name).join(", "),
    currency: country.currency,
  };

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
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
              {country.name.common}
            </Text>
          </View>
          <View>
            <DataTable>
              {Object.entries(countryInfo).map(([key, value]) => (
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
              ))}
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
