/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const sectionData = [
  {
    key: 'foundation',
    title: 'Foundations of JavaScript',
    description: 'Establish a strong foundation in JavaScript, covering fundamentals to advanced concepts necessary for web development.',
    subsections: [
      {
        key: 'fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Learn the basics of JavaScript, including variables, functions, and event handling.',
      },
      {
        key: 'advanced',
        title: 'Advanced JavaScript Concepts',
        description: 'Dive deeper into JavaScript with advanced topics like closures, asynchronous programming, and more.',
      },
      {
        key: 'htmlCss',
        title: 'HTML and CSS Fundamentals',
        description: 'Learn the basics of HTML and CSS to create and style web pages.',
      },
    ],
  },
];

const Accordion = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="w-[100%] sm:w-[50%] mx-auto mt-10 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">What will you learn</h2>
      {sectionData.map((section) => (
        <div key={section.key} className="border rounded-lg mb-4">
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="text-lg font-semibold">{section.title}</span>
            {openSections[section.key] ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {openSections[section.key] && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-sm text-gray-600 mb-2">{section.description}</p>
              {section.subsections.map((subsection) => (
                <div key={subsection.key} className="border rounded-lg mb-2">
                  <button
                    onClick={() => toggleSection(subsection.key)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span>{subsection.title}</span>
                    {openSections[subsection.key] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {openSections[subsection.key] && (
                    <div className="p-4 border-t">
                      <p className="text-sm text-gray-600">{subsection.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
