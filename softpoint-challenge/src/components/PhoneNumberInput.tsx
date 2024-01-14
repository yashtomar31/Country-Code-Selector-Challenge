import React from 'react';
import { CountryCode, AsYouType } from 'libphonenumber-js';

type PhoneNumberInputProps = {
  selectedCountryCode: string;
  phoneNumber: string;
  onPhoneNumberChange: (number: string) => void;
};

const PhoneNumberInput = ({ selectedCountryCode, phoneNumber, onPhoneNumberChange }: PhoneNumberInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = event.target.value;
    let formattedNumber = '';

    if (selectedCountryCode) {
      // Format as the user types based on the selected country code
      const asYouTypeFormatter = new AsYouType(selectedCountryCode as CountryCode);
      formattedNumber = asYouTypeFormatter.input(inputNumber);
    } else {
      // If no country is selected, just use the raw input
      formattedNumber = inputNumber;
    }

    onPhoneNumberChange(formattedNumber);
  };

  return (
    <input
      type="text"
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={handleInputChange}
    />
  );
};

export default PhoneNumberInput;
