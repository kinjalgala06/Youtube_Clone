import React, { useState, useEffect } from 'react';

// Simulate a token API
// const getFakeToken = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ token: 'mockToken123' });
//     }, 1000); // simulate 1s delay
//   });
// };

// Simulate a countries API using restcountries.com
// const getCountriesWithToken = async (token) => {
const getCountriesWithToken = async () => {
  // We pretend we're using the token here
  // console.log("Using token:", token);

  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2');
  const data = await res.json();
  return data;
};

const Prac = () => {
  const [countries, setCountries] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchCountriesWithToken = async () => {
    try {
      // Step 1: Simulate token fetch
      // const tokenData = await getFakeToken();
      // const token = tokenData.token;

      // Step 2: Fetch countries with simulated token
      const countryData = await getCountriesWithToken();

      setCountries(countryData);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountriesWithToken();
  }, []);
console.log(countries);

  return (
    <>
      <h1>Countries</h1>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        <select>
          <option value="">Please Select</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      {/* )} */}
    </>
  );
};

export default Prac;
