// src/PhoneNumberInput.js
import React, { useState } from 'react';

const countryCodes = [
  { name: 'United States', code: '+1', maxLength: 10 },
  { name: 'India', code: '+91', maxLength: 10 },
  { name: 'United Kingdom', code: '+44', maxLength: 10 },
  { name: 'Australia', code: '+61', maxLength: 9 },
  { name: 'Canada', code: '+1', maxLength: 10 },
  // Add more countries as needed
];

const PhoneNumberInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (e) => {
    const selected = countryCodes.find(country => country.code === e.target.value);
    setSelectedCountry(selected);
    setPhoneNumber(''); // Reset phone number when country changes
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only digits
    if (value.length <= selectedCountry.maxLength) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
      <div className="flex">
        <select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          className="border border-gray-300 rounded-l-md p-2"
        >
          {countryCodes.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          className="border border-gray-300 rounded-r-md p-2 w-full"
          placeholder="Enter your number"
          maxLength={selectedCountry.maxLength}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;