// ToDoList.jsx
import { useState } from 'react';
import Accordion from './Accordion';

const ToDoList = ({ toDoListData }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [openEntries, setOpenEntries] = useState({});

  const toggleAccordion = (level, id) => {
    const setterMap = {
      0: setOpenCategories,
      1: setOpenEntries,
    };
    setterMap[level]((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDoubleClick = (level) => {
    const setterMap = {
      0: setOpenCategories,
      1: setOpenEntries,
    };
    setterMap[level]((prev) => {
      const allOpen = Object.values(prev).every(Boolean);
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = !allOpen;
      });
      return newState;
    });
  };

  return (
    <>
      {toDoListData.map((category) => (
        <Accordion
          key={category.list_id}
          title={category.name}
          isOpen={openCategories[category.list_id]}
          onToggle={() => toggleAccordion(0, category.list_id)}
          onDoubleClick={handleDoubleClick}
          level={0}
        >
          <p>{category.description}</p>
          {category.entries && category.entries.length > 0 ? (
            category.entries.map((entry) => (
              <Accordion
                key={entry.entry_id}
                title={entry.name}
                isOpen={openEntries[entry.entry_id]}
                onToggle={() => toggleAccordion(1, entry.entry_id)}
                onDoubleClick={handleDoubleClick}
                level={1}
              >
                <p>{entry.description}</p>
                <p>Due: {entry.due_date}</p>
                <p>Status: {entry.status}</p>
              </Accordion>
            ))
          ) : (
            <p>No entries in this category.</p>
          )}
        </Accordion>
      ))}
    </>
  );
};

export default ToDoList;
