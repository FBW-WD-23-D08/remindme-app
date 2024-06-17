import React from 'react';

interface RemeListItemProps {
  reminder: {
    completed: boolean;
    text: string;
  };
  onCheck: () => void;
  onDelete: () => void;
}

function RemeListItem({ reminder, onCheck, onDelete }: RemeListItemProps) {
  return (
    <div className={`reminder-item ${reminder.completed ? 'completed' : ''}`}>
      <div className="reminder-alert container m-2 px-4 py-2 flex justify-center bg-amber-900 rounded-xl opacity-40">
        <h1>If the ball turns red, you have forgotten something</h1>
      </div>
      <div className="reminder-content container flex flex-col justify-center">
        <p>{reminder.text}</p>
        <div className="reminder-actions flex justify-center">
          {!reminder.completed && (
            <button
              onClick={onCheck}
              className="check-button text-green-500 rounded-xl bg-stone-700 p-1 m-1"
            >
              Check
            </button>
          )}
          <button
            onClick={onDelete}
            className="delete-button text-rose-950 rounded-xl bg-stone-700 p-1 m-1 important"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemeListItem;
