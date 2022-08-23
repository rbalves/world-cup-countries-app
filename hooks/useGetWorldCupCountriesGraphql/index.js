import { useQuery } from "@apollo/client";

import { COUNTRIES_QUERY } from "../../services/graphql/queries";

import { worldCupCountries } from "../../data/worldCupCountries";

const useGetWorldCupCountriesGraphql = () => {
  const { data, loading } = useQuery(COUNTRIES_QUERY);

  const countries = data?.countries
    .filter((country) => {
      return worldCupCountries
        .map((worldCupCountry) => worldCupCountry.nation.toLowerCase())
        .includes(country.name.toLowerCase());
    })
    .map((country) => {
      const { ranking, participations, titles, last_title_year } =
        worldCupCountries.find(
          (worldCupCountry) =>
            worldCupCountry.nation.toLowerCase() === country.name.toLowerCase()
        );

      return {
        ...country,
        fifa: {
          ranking,
          participations,
          titles,
          last_title_year,
        },
      };
    })
    .sort((a, b) => (a.fifa.ranking > b.fifa.ranking ? 1 : -1));

  return { countries, loading };
};

export default useGetWorldCupCountriesGraphql;
