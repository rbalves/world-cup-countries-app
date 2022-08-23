import { worldCupCountries } from "../../data/worldCupCountries";
import useGetWorldCupCountriesGraphql from "../useGetCountriesGraphql";

import useGetWorldCupCountriesRest from "../useGetCountriesRest";

const getCountriesBy = {
  REST: () => useGetWorldCupCountriesRest(),
  GRAPHQL: () => useGetWorldCupCountriesGraphql(),
};

const useGetWorldCupCountries = () => {
  const { countries, loading, error } = getCountriesBy.GRAPHQL();

  const wordlCupCountries = countries
    ?.filter((country) => {
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

  return { wordlCupCountries, loading, error };
};

export default useGetWorldCupCountries;
