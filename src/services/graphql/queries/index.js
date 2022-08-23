import { gql } from "@apollo/client";

const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      continent {
        name
      }
      name
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export { COUNTRIES_QUERY };
