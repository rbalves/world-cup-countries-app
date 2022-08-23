import { useQuery } from "@apollo/client";

import { COUNTRIES_QUERY } from "../../services/graphql/queries";

const useGetCountriesGraphql = () => {
  const { data, loading, error } = useQuery(COUNTRIES_QUERY);

  const countries = data?.countries.map((country) => ({
    code: country.code,
    name: country.name,
    region: country.continent.name,
    capital: country.capital,
    flag: country.emoji,
    currencies: country.currency,
    languages: country.languages.map(({ name }) => name).join(", "),
    population: 0,
  }));

  return { countries, loading, error };
};

export default useGetCountriesGraphql;
