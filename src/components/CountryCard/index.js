import { useState } from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

import CountryModal from "../CountryModal";

const CountryCard = ({ country }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <CountryModal
        country={country}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.countryCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.countryFlag}>{country.flag}</Text>
        </View>
        <View style={{ flex: 4 }}>
          <View>
            <Text style={styles.countryTitle}>{country.name}</Text>
          </View>
          <View style={styles.countryData}>
            <View
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <View>
                <Text>
                  <Text style={styles.countryFifaInfo}>Ranking:</Text>{" "}
                  {country.fifa.ranking}ª
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles.countryFifaInfo}>Participations:</Text>{" "}
                  {country.fifa.participations}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <View>
                <Text>
                  <Text style={styles.countryFifaInfo}>Titles:</Text>{" "}
                  {country.fifa.titles}
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles.countryFifaInfo}>Last Title:</Text>{" "}
                  {country.fifa.last_title_year}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={{ color: "#AA4A44" }}>More info</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  countryCard: {
    flex: 1,
    backgroundColor: "#84c8cf",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
    padding: 8,
  },
  countryTitle: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
  },
  countryFlag: {
    fontSize: 64,
  },
  countryData: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryFifaInfo: {
    fontWeight: "bold",
  },
});

export default CountryCard;
