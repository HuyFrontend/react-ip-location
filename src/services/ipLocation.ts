const ipLocation = async (ipAddress?: string) => {
  const countryIS = ipAddress
    ? `https://api.country.is/${ipAddress}`
    : `https://api.country.is/`;

  const res = await fetch(countryIS)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => console.error(`Error:`, error));
  // const res = await axios.get('https://api.country.is/101.110.63.255'); // JP test
  // const res = await axios.get('https://api.country.is/101.109.255.255'); // TH
  console.log("REAS", res);
  return res || null;
};

export const getIPLocation = () => ipLocation();

export const checkIPLocation = (ipAddress: string) => ipLocation(ipAddress);
