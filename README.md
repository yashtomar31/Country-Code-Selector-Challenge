# Country Code Selector and Phone Number Formatter

## Project Overview

This project is a React application that includes a country code selector and a dynamic phone number input field. The application allows users to select a country and then input a phone number, which is automatically formatted according to the selected country's standard format. The application uses `libphonenumber-js` for robust and accurate phone number formatting.

## Key Features

- **Country Selector Dropdown:** Users can select a country from a dropdown menu. The dropdown displays a list of countries with their respective flags and calling codes.
- **Dynamic Phone Number Input:** Based on the selected country, the phone number input field formats the entered number in real-time to match the country's phone number format. 
- **Phone Number Validation:** Validates the phone number length against the selected country's standard phone number length.
- **Formatted Placeholder:** Displays a formatted placeholder in the phone number input field to guide the user on the expected format.

## Technologies Used

- React.js
- TypeScript
- `libphonenumber-js` for phone number formatting and validation
- CSS for styling

## How to Run the Project

1. **Clone the Repository:**
```sh
   git clone [repository-url]
   cd [project-directory]
   ```
2. **Install Dependencies:**
```sh
   npm install
   ```

3. **Run the Application:**
```sh
   npm start
   ```

This will start the development server. The application can be accessed at `http://localhost:3000` in a web browser.

## Setting Up the Environment

Ensure you have the following installed:
- Node.js
- npm (usually comes with Node.js)
- A code editor (like Visual Studio Code)

## Project Structure

- `src/components/CountrySelector.tsx`: Component for selecting the country.
- `src/components/PhoneNumberInput.tsx`: Component for the phone number input field.
- `src/App.tsx`: Main application component integrating the country selector and phone number input.
- `src/countries.json`: JSON file containing country data (name, calling code, phone number length).
- `src/App.css`: Stylesheet for the application.
