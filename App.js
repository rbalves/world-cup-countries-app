import { useState } from "react";

import { BottomNavigation, Text } from "react-native-paper";

import { ApolloProvider } from "@apollo/client";

import { client } from "./src/services/graphql/client";

import Home from "./src/components/Home";
import Groups from "./src/components/Groups";
import Macthes from "./src/components/Matches";

export default function App() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "teams",
      title: "Teams",
    },
    {
      key: "groups",
      title: "Groups",
    },
    {
      key: "matches",
      title: "Matches",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    teams: () => <Home />,
    groups: () => <Groups />,
    matches: () => <Macthes />,
  });

  return (
    <ApolloProvider client={client}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#AA4A44" }}
        safeAreaInsets={{ top: 0, bottom: 12, left: 0, right: 0 }}
      />
    </ApolloProvider>
  );
}
