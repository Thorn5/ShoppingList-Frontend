import { useState } from 'react';
import Accordion from './Accordion';

const ToDoList = ({ toDoListData }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [openEntries, setOpenEntries] = useState({});

  // Toggle individual accordions
  const toggleAccordion = (level, id) => {
    const setterMap = {
      0: setOpenCategories,
      1: setOpenEntries,
    };
    setterMap[level]((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Expand/Collapse all accordions at a specific level
  const toggleExpandAllAtLevel = (level, parentId, items) => {
    const setterMap = {
      0: setOpenCategories,
      1: setOpenEntries,
    };

    setterMap[level]((prev) => {
      const allExpanded = items.every((item) => prev[item.id]);
      const newState = { ...prev };
      items.forEach((item) => {
        newState[item.id] = !allExpanded;
      });
      return newState;
    });
  };

  return (
    <>
      {/* Top-level Expand/Collapse All for Categories */}
      <button
        onClick={() =>
          toggleExpandAllAtLevel(
            0,
            null,
            toDoListData.map((category) => ({ id: category.list_id }))
          )
        }
      >
        {Object.values(openCategories).every(Boolean)
          ? 'Collapse All Categories'
          : 'Expand All Categories'}
      </button>

      {toDoListData.map((category) => (
        <Accordion
          key={category.list_id}
          title={category.name}
          isOpen={openCategories[category.list_id]}
          onToggle={() => toggleAccordion(0, category.list_id)}
          level={0}
        >
          {/* Expand/Collapse All Entries within a Category */}
          <button
            onClick={() =>
              toggleExpandAllAtLevel(
                1,
                category.list_id,
                category.entries.map((entry) => ({ id: entry.entry_id }))
              )
            }
          >
            {category.entries.every((entry) => openEntries[entry.entry_id])
              ? 'Collapse All Entries'
              : 'Expand All Entries'}
          </button>

          {category.entries && category.entries.length > 0 ? (
            category.entries.map((entry) => (
              <Accordion
                key={entry.entry_id}
                title={entry.name}
                isOpen={openEntries[entry.entry_id]}
                onToggle={() => toggleAccordion(1, entry.entry_id)}
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
