import React from 'react';

const Form = ({ city, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
