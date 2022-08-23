import { useEffect, useState } from "react";

import getAllCountries from "../../services/rest/getAllCountries";

const useGetCountriesRest = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWorldCupCountries = async () => {
      try {
        setLoading(true);

        const data = await getAllCountries();

        setCountries(
          data.map((country) => ({
            code: country.cca3,
            name: country.name.common,
            region: country.region,
            capital: country.capital,
            flag: country.flag,
            currencies: Object.values(country.currencies || {})
              .map(({ name }) => name)
              .join(", "),
            languages: Object.values(country.languages || {}).join(", "),
            population: country.population,
          }))
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getWorldCupCountries();
  }, []);

  return { countries, loading, error };
};

export default useGetCountriesRest;
