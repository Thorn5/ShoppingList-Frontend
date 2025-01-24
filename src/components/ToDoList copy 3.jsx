// ToDoList.jsx

import React from 'react';
import Accordion from './Accordion';

const ToDoList = ({ toDoListData }) => {
  return (
    <Accordion title="To Do">
      {toDoListData.map((category) => (
        <Accordion key={category.list_id} title={category.name}>
          <p>{category.description}</p>
          {category.entries && category.entries.length > 0 ? (
            category.entries.map((entry) => (
              <Accordion key={entry.entry_id} title={entry.name}>
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
    </Accordion>
  );
};

export default ToDoList;
