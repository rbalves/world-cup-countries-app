import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Layout = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.pageTitle}>World Cup 2022</Text>
          </View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 8,
  },
  pageTitle: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
  },
});

export default Layout;