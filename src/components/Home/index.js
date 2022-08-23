import CountriesList from "../CountriesList";
import CountryCard from "../CountryCard";
import Layout from "../Layout";
import Loading from "../Loading";
import NotFound from "../NotFound";

import useGetWorldCupCountries from "../../hooks/useGetWorldCupCountries";

export default function Home() {
  const { wordlCupCountries, loading, error } = useGetWorldCupCountries();

  if (loading) return <Loading />;

  if (error || wordlCupCountries.length === 0) return <NotFound />;

  return (
    <Layout>
      <CountriesList>
        {wordlCupCountries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </CountriesList>
    </Layout>
  );
}
