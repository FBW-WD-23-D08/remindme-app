
'use client';
import '@/app/globals.css';
import RemeListItem from './RemeListItem';

const RemeForm = () => {


  
    return (
      <>
      <div className='container mx-auto flex justify-center '>
      <input type="text" 
     autoFocus={true} 
      placeholder='You have to remember this'className='rounded-md m-2 px-4 py-2 text-center '/>
      <button
   className='bg-gray-900  text-gray-500 m-2 px-6 py-2 rounded-xl' >Add</button>
    </div>
    <RemeListItem />  
      </>
    );
  };
  
  export default RemeForm;