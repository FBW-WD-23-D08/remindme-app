'use client';
import React, { useState } from 'react';
import '@/app/globals.css';
import RemeListItem from './RemeListItem';

const RemeForm = () => {
  const [reminders, setReminders] = useState<{ id: number; text: string; completed: boolean; }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [nextId, setNextId] = useState(1); // Zustand für die nächste verfügbare ID

  const handleAddReminder = () => {
    if (inputValue.trim() !== '') {
      setLoading(true);
      setTimeout(() => {
        const newReminder = { id: nextId, text: inputValue, completed: false };
        setReminders([...reminders, newReminder]);
        setNextId(nextId + 1); // Erhöhe die nächste verfügbare ID
        setInputValue('');
        setLoading(false);
      }, 500); // Simulating a loading delay
    }
  };

  const handleCheckReminder = (id: number) => {
    const updatedReminders = reminders.map(reminder =>
      reminder.id === id ? { ...reminder, completed: true } : reminder
    );
    setReminders(updatedReminders);
  };
  
  const handleDeleteReminder = (id: number) => {
    const updatedReminders = reminders.filter(reminder => reminder.id !== id);
    setReminders(updatedReminders);
  };

  return (
    <>
      <div className='container mx-auto flex justify-center'>
        <input
          type="text"
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='You have to remember this'
          className='rounded-md m-2 px-4 py-2 text-center'
        />
        <button
          onClick={handleAddReminder}
          className='bg-gray-900 text-gray-500 m-2 px-6 py-2 rounded-xl'
        >
          Add
        </button>
      </div>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <>
          {reminders.length === 0 ? (
            <p className='text-center'>No reminders yet</p>
          ) : (
            reminders.map(reminder => (
              <RemeListItem
                key={reminder.id}
                reminder={reminder}
                onCheck={() => handleCheckReminder(reminder.id)}
                onDelete={() => handleDeleteReminder(reminder.id)}
              />
            ))
          )}
        </>
      )}
    </>
  );
};

export default RemeForm;
