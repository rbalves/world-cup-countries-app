import { StyleSheet, View } from "react-native";

const CountriesList = ({ children }) => (
  <View style={styles.countryList}>{children}</View>
);

const styles = StyleSheet.create({
  countryList: {
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
  },
});

export default CountriesList;
