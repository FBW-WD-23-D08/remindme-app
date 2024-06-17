import React from 'react';
import RemeForm from './components/RemeForm';

export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col gap-4'>
  <h1 className="m-2 text-center text-3xl font-bold ">
        Reminder
      </h1>
      <RemeForm />
    </div>
  );
}
