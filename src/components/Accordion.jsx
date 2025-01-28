// Accordion.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, children, isOpen, onToggle, onDoubleClick, level }) => {
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      onDoubleClick(level);
    } else {
      onToggle();
    }
    setLastClickTime(currentTime);
  };

  useEffect(() => {
    const handleDoubleClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener('dblclick', handleDoubleClick);
    return () => {
      document.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <h3>{title}</h3>
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default Accordion;
