'use client';
import React, { useState } from 'react';
import '@/app/globals.css';
import RemeListItem from './RemeListItem';

const RemeForm = () => {
  const [reminders, setReminders] = useState<{ text: string; completed: boolean; }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddReminder = () => {
    if (inputValue.trim() !== '') {
      setLoading(true);
      setTimeout(() => {
        const updatedReminders = [...reminders, { text: inputValue, completed: false }];
        setReminders(updatedReminders);
        setInputValue('');
        setLoading(false);
      }, 500); // Simulating a loading delay
    }
  };

  const handleCheckReminder = (index: number) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].completed = true;
    setReminders(updatedReminders);
  };
  
  const handleDeleteReminder = (index: number) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
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
            reminders.map((reminder, index) => (
              <RemeListItem
                key={index}
                reminder={reminder}
                onCheck={() => handleCheckReminder(index)}
                onDelete={() => handleDeleteReminder(index)}
              />
            ))
          )}
        </>
      )}
    </>
  );
};

export default RemeForm;
