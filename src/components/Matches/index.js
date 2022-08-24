import { StyleSheet, Text, View } from "react-native";
import { matches } from "../../data/matches";

import useGetWorldCupCountries from "../../hooks/useGetWorldCupCountries";

import Layout from "../Layout";
import Loading from "../Loading";
import NotFound from "../NotFound";

const Macthes = () => {
  const { wordlCupCountries, loading, error } = useGetWorldCupCountries();

  if (loading) return <Loading />;

  if (error || wordlCupCountries.length === 0) return <NotFound />;

  const flags = wordlCupCountries.map(({ name, flag }) => ({ name, flag }));

  return (
    <Layout title="Matches">
      <View style={{ marginTop: 12 }}>
        {matches
          .sort((a, b) => (a.group > b.group ? 1 : -1))
          .map(({ id, location, team1, team2, group, date, time }) => {
            return (
              <View key={id} style={styles.groupCard}>
                <Text style={styles.groupTitle}>{location}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <Text style={styles.teamName}>{`${
                      flags.find(({ name }) => name === team1)?.flag || ""
                    }${team1}`}</Text>
                    <Text style={styles.teamName}>{`${
                      flags.find(({ name }) => name === team2)?.flag || ""
                    }${team2}`}</Text>
                  </View>
                  <View style={styles.teamCard}>
                    <Text style={styles.teamName}>{`Group ${group}`}</Text>
                    <Text style={styles.teamName}>{date}</Text>
                    <Text style={styles.teamName}>{time}</Text>
                  </View>
                </View>
              </View>
            );
          })}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  groupCard: {
    flex: 1,
    backgroundColor: "#84c8cf",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
    padding: 8,
    display: "flex",
    flexDirection: "column",
  },
  groupTitle: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
  },
  teamCard: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  teamName: {
    fontSize: 22,
    marginVertical: 4,
  },
  teamFlag: {
    fontSize: 60,
  },
});

export default Macthes;
