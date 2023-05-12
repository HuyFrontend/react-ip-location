import axios from "axios";

const ipLocation = async (ipAddress?: string) => {
  const countryIS = ipAddress
    ? `https://api.country.is/${ipAddress}`
    : `https://api.country.is/`;
  const res = await axios.get(countryIS)?.then((resrult: any) => {
    return resrult.data;
  });

  // const res = await axios.get('https://api.country.is/101.110.63.255'); // JP test
  // const res = await axios.get('https://api.country.is/101.109.255.255'); // TH

  return res || null;
};

export const getIPLocation = () => ipLocation();

export const checkIPLocation = (ipAddress: string) => ipLocation(ipAddress);
