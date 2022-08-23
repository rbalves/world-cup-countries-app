import { useEffect, useState } from "react";

import { worldCupCountries } from "../../data/worldCupCountries";

import getAllCountries from "../../services/rest/getAllCountries";

const useGetWorldCupCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWorldCupCountries = async () => {
      try {
        setLoading(true);

        const data = await getAllCountries();

        setCountries(
          data
            .filter((country) => {
              return worldCupCountries
                .map((worldCupCountry) => worldCupCountry.nation.toLowerCase())
                .includes(country.name.common.toLowerCase());
            })
            .map((country) => {
              const { ranking, participations, titles, last_title_year } =
                worldCupCountries.find(
                  (worldCupCountry) =>
                    worldCupCountry.nation.toLowerCase() ===
                    country.name.common.toLowerCase()
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
            .sort((a, b) => (a.fifa.ranking > b.fifa.ranking ? 1 : -1))
        );
      } catch {
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    getWorldCupCountries();
  }, []);

  return { countries, loading };
};

export default useGetWorldCupCountries;
