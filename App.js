import { ApolloProvider } from "@apollo/client";

import { client } from "./src/services/graphql/client";

import Home from "./src/components/Home";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
