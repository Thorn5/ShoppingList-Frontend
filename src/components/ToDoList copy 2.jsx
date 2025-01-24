import React from 'react';
import Accordion from './Accordion';

const ToDoList = ({ toDoListData }) => {
  return (
    <Accordion title="To Do">
      {toDoListData.map((list) => (
        <Accordion key={list.list_id} title={list.name}>
          <p>{list.description}</p>
          {list.entries && list.entries.length > 0 ? (
            list.entries.map((entry) => (
              <Accordion key={entry.entry_id} title={entry.name}>
                <p>{entry.description}</p>
                <p>Due: {entry.due_date}</p>
                <p>Status: {entry.status}</p>
              </Accordion>
            ))
          ) : (
            <p>No entries in this list.</p>
          )}
        </Accordion>
      ))}
    </Accordion>
  );
};

export default ToDoList;
