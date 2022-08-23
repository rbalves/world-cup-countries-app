import { ApolloProvider } from "@apollo/client";

import { client } from "./services/graphql/client";

import Home from "./components/Home";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
