import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Concepts from './Concepts'
import fuzzy from 'fuzzy';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const ConceptsSection = ({
  conceptData,
  selectedConcepts,
  onClick,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = conceptData.concepts
    .filter(concept => concept.language === selectedLanguage || selectedLanguage === 'All')
    .filter(concept => fuzzy.test(searchTerm, concept.name));

  const handleLanguageChange = event => {
    setSelectedLanguage(event.target.value);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setSelectedLanguage('JavaScript');
    setSearchTerm('');
  };


  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'We Talk Tech',
    paragraph: 'Coding Concepts Simplified in ELI5 format'
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="dropdown-search-container">
            <div className='col-sm-4'>
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="All">All</option>
                {/* <option value="Java">Java</option> */}
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>
            <div className='col-sm-4'>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className='col-sm-4'>
              <button className="reset_button" onClick={() => {
                handleReset()
                onClick("reset")
                }}>
                Reset
              </button>
            </div>
          </div>
          <Concepts filteredData={filteredData} selectedConcepts={selectedConcepts} onClick={onClick} />
        </div>
      </div>
    </section>
  );
}

ConceptsSection.propTypes = propTypes;
ConceptsSection.defaultProps = defaultProps;

export default ConceptsSection;