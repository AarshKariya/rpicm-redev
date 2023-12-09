import React, { useState } from "react";
import styles from "./Nationality.module.scss";
import { countries } from "../../helpers/nationalityCountries";

const Nationality: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    // Handle country change logic
  };

  return (
    <div className={styles.nationality}>
      <div className={styles.leftColumn}>Nationality</div>
      <div className={styles.rightColumn}>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className={styles.selectField}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Nationality;
