import React, { useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import PhoneNumberInput from './components/PhoneNumberInput';
import countriesData from './countries.json'; // Adjust the path as necessary

// Define the structure of country data
type CountryData = {
  id: string;
  name: string;
  calling_code: string;
  phone_length: string;
};

type CountriesData = {
  [key: string]: CountryData;
};

function App() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
  };

  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number);
  };

const isPhoneNumberValid = (): boolean => {
  if (!selectedCountryCode || !phoneNumber) return false;
  const countryInfo = (countriesData as CountriesData)[selectedCountryCode];
  
  // Strip out non-numeric characters from the phone number
  const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

  return numericPhoneNumber.length === parseInt(countryInfo.phone_length, 10);
};


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedCountryCode || !phoneNumber) {
      alert('Please enter a phone number and select a country');
      return;
    }
    if (!isPhoneNumberValid()) {
      alert('Please enter a valid phone number for the selected country');
      return;
    }

    console.log('Phone Number Submitted:', phoneNumber);
    console.log('Selected Country Code:', selectedCountryCode);

    alert('Phone number submitted successfully!');
    setPhoneNumber('');
    setSelectedCountryCode('');
  };

  return (
    <div className="App">
      <h1>SoftPoint React Challenge</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <CountrySelector onCountryChange={handleCountryChange} />
        <PhoneNumberInput
          selectedCountryCode={selectedCountryCode}
          phoneNumber={phoneNumber} 
          onPhoneNumberChange={handlePhoneNumberChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
