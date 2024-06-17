
'use client';
import '@/app/globals.css';

const TodoForm = () => {


  
    return (
      <>
      <div className='container mx-auto flex justify-center '>
      <input type="text" 
     autoFocus={true} 
      placeholder='Add new Todo'className='rounded-full m-2 px-4 py-2 text-center '/>
      <button
   className='bg-gray-900  text-gray-500 m-2 px-6 py-2 rounded-full' >Add</button>
    </div>
      </>
    );
  };
  
  export default TodoForm;