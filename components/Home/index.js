import CountriesList from "../CountriesList";
import CountryCard from "../CountryCard";
import Layout from "../Layout";
import Loading from "../Loading";
import NotFound from "../NotFound";

import useGetWorldCupCountriesGraphql from "../../hooks/useGetWorldCupCountriesGraphql";

export default function Home() {
  const { countries, loading, error } = useGetWorldCupCountriesGraphql();

  if (loading) return <Loading />;

  if (error || countries.length === 0) return <NotFound />;

  return (
    <Layout>
      <CountriesList>
        {countries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </CountriesList>
    </Layout>
  );
}
