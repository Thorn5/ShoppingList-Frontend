// Accordion.jsx
const Accordion = ({ title, isOpen, onToggle, level, children }) => {
  return (
    <div className={`accordion level-${level}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
