import React, { useState } from "react";

export default function AcordionItem({ title, content, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} id={id} onClick={toggleOpen}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {title}
        </button>
      </h2>
      {isOpen && (
        <div
          id={id}
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">{content}</div>
        </div>
      )}
    </div>
  );
}