import React, { useState } from 'react';
// import sections
import ConceptsSection from '../components/sections/ConceptsSection';
import ExplanationSection from '../components/sections/ExplanationSection';
import ConceptData from '../ConceptData'

const Home = () => {
  const [selectedConcepts, setSelectedConcepts] = useState([]);

  const handleConceptClick = (conceptData) => {
    if (selectedConcepts.includes(conceptData)) {
      // Remove the concept
      setSelectedConcepts(prevAttributes => prevAttributes.filter(attr => attr !== conceptData));
    } else {
      // Add the concept
      setSelectedConcepts(prevAttributes => [...prevAttributes, conceptData]);
    }
  
    if (conceptData === 'reset') {
      setSelectedConcepts([]);
    }
  };

  const selectedConceptExplanations = ConceptData.concepts.filter(concept => selectedConcepts.includes(concept));
  
  return (
    <>
      <ConceptsSection conceptData={ConceptData} onClick={handleConceptClick} selectedConcepts={selectedConcepts}/>
      <ExplanationSection explanationData={selectedConceptExplanations} selectedConcepts={selectedConcepts} topDivider />
    </>
  );
}

export default Home;