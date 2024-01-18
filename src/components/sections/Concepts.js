import React from 'react';

const Concepts = ({ filteredData, onClick, selectedConcepts }) => {
  return (
    <div className="concepts-grid">
      {filteredData && filteredData.map((concept) => (
        <div 
          key={concept.name_and_language} 
          className={`concept-item ${selectedConcepts.includes(concept) ? 'selected' : ''}`} 
          onClick={() => onClick(concept)}
        >
          {concept.name}
        </div>
      ))}
    </div>
  );
};

export default Concepts;