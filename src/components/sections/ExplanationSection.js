import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const ExplanationSection = ({
  explanationData,
  selectedConcepts,
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

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  
  const openPopup = (img) => {
    setSelectedImage(img);
    setShowPopup(true);
  }
  
  const closePopup = () => {
    setShowPopup(false);
  }

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div>
            {explanationData.map(concept => (
              <div className="tiles-div" key={concept.name_and_language}>
                <div>{concept.name_and_language}</div>
                <div className="tiles-item-inner">
                  <div className="concept-item-content">
                    <p className="">{concept.explanation}</p>
                    {concept.code_snippet &&
                    <>
                      <Image
                        className="concept-img"
                        src={concept.code_snippet}
                        alt={concept.name_and_language}
                        onClick={() => openPopup(concept.code_snippet)}
                      />
                      <br/>
                    </>
                    }
                    {concept.code_snippet_explanation &&
                      <p className="">{concept.code_snippet_explanation}</p>
                    }
                  </div>
                  <div className="concept-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <div><span className="text-color-high underline-half">Resources</span></div>
                    <br />
                    {concept.resources.map(resource => (
                      <p className="concept-item-link" key={resource}><a target="blank" href={resource}>{resource}</a> <br /></p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      { showPopup && 
      <div className="code_snippet_popup">
        <img src={selectedImage} alt={selectedImage} />
        <div className="close-button" onClick={closePopup}>X</div>
      </div>
    }
    </section>
  );
}

ExplanationSection.propTypes = propTypes;
ExplanationSection.defaultProps = defaultProps;

export default ExplanationSection;