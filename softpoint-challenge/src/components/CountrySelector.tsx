import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import countriesData from './countries.json'; // Adjust the path as necessary

type CountryData = {
  id: string;
  name: string;
  calling_code: string;
  phone_length: string;
};

type CountriesData = {
  [key: string]: CountryData;
};

type SelectOption = {
  value: string;
  label: string;
};

const countryOptions: SelectOption[] = Object.entries(countriesData as CountriesData).map(([key, value]) => ({
  value: key,
  label: `${value.name} (${value.calling_code})`,
}));

type CountrySelectorProps = {
  onCountryChange: (countryCode: string) => void;
};

const CountrySelector = ({ onCountryChange }: CountrySelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<SingleValue<SelectOption>>(null);

  const handleChange = (selectedOption: SingleValue<SelectOption>) => {
    const countryCode = selectedOption ? selectedOption.value : '';
    setSelectedCountry(selectedOption);
    onCountryChange(countryCode);
  };

  return (
    <Select
      value={selectedCountry}
      onChange={handleChange}
      options={countryOptions}
      placeholder="Select a country"
    />
  );
};

export default CountrySelector;
