import { StyleSheet, Text, View } from "react-native";

import useGetWorldCupCountries from "../../hooks/useGetWorldCupCountries";

import Layout from "../Layout";
import Loading from "../Loading";
import NotFound from "../NotFound";

const Groups = () => {
  const { wordlCupCountries, loading, error } = useGetWorldCupCountries();

  if (loading) return <Loading />;

  if (error || wordlCupCountries.length === 0) return <NotFound />;

  const groups = [
    ...new Set(wordlCupCountries.map((country) => country.fifa.group)),
  ]
    .map((group) => {
      const teams = wordlCupCountries
        .filter((team) => team.fifa.group === group)
        .map(({ name, flag }) => ({ name, flag }))
        .sort();

      return {
        group,
        teams,
      };
    })
    .sort((a, b) => (a.group > b.group ? 1 : -1));

  return (
    <Layout title="Groups">
      <View>
        {groups.map(({ group, teams }) => {
          return (
            <View key={group} style={styles.groupCard}>
              <Text style={styles.groupTitle}>{`Group ${group}`}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  {teams.slice(0, 2).map((team) => (
                    <View key={team.name} style={styles.teamCard}>
                      <Text style={styles.teamFlag}>{team.flag}</Text>
                      <Text style={styles.teamName}>{team.name}</Text>
                    </View>
                  ))}
                </View>
                <View>
                  {teams.slice(2).map((team) => (
                    <View key={team.name} style={styles.teamCard}>
                      <Text style={styles.teamFlag}>{team.flag}</Text>
                      <Text style={styles.teamName}>{team.name}</Text>
                    </View>
                  ))}
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
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
  },
  teamCard: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  teamName: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
  },
  teamFlag: {
    fontSize: 60,
  },
});

export default Groups;
