import CountriesList from "./components/CountriesList";
import CountryCard from "./components/CountryCard";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

import useGetWorldCupCountries from "./hooks/useGetWorldCupCountries";

export default function App() {
  const { countries, loading } = useGetWorldCupCountries();

  if (loading) return <Loading />;

  if (countries.length === 0) return <NotFound />;

  return (
    <Layout>
      <CountriesList>
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </CountriesList>
    </Layout>
  );
}
