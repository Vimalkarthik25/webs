import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [budgetOptions, setBudgetOptions] = useState([]);

  const updateBudgetOptions = (event) => {
    const transactionType = event.target.value;
    let options = [];

    if (transactionType === 'buy') {
      options = ['<10L', '10L-20L', '20L-50L', '50L-1Cr', '1Cr+'];
    } else if (transactionType === 'rent') {
      options = ['<5K', '5K-10K', '10K-20K', '20K-50K', '50K+'];
    }

    setBudgetOptions(options);
  };

  return (
    <section>
      <div className="home-content">
        <h1>Find Your Dream Property with A Vaastu Property Solution</h1>
        <form id="search-form">
          <div>
            <label htmlFor="location">Location:</label>
            <select id="location" name="location">
              <option value="-">-</option>
              <option value="bangalore">Bangalore</option>
              <option value="other cities">Other cities</option>
            </select>
          </div>

          <div>
            <label htmlFor="property-type">Property Type:</label>
            <select id="property-type" name="property-type">
              <option value="-">-</option>
              <option value="house">House</option>
              <option value="apartment/flats">Apartment/Flats</option>
              <option value="commercial space">Commercial Space</option>
              <option value="individual houses">Individual House</option>
              <option value="office space">Office Space</option>
              <option value="factory/industries">Factory/Industries</option>
              <option value="godown/warehouse">Godown/Warehouse</option>
              <option value="plots">Plots</option>
              <option value="agricultural lands">Agricultural Lands</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="transaction-type">Transaction Type:</label>
            <select id="transaction-type" name="transaction-type" onChange={updateBudgetOptions}>
              <option value="-">-</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget">Budget:</label>
            <select id="budget" name="budget">
              <option value="-">-</option>
              {budgetOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="area">Area:</label>
            <select id="area" name="area">
              <option value="-">-</option>
              <option value="bangalore north">Bangalore North</option>
              <option value="bangalore south">Bangalore South</option>
              <option value="bangalore east">Bangalore East</option>
              <option value="bangalore west">Bangalore West</option>
              <option value="bangalore central">Bangalore Central</option>
            </select>
          </div>

          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Home;
