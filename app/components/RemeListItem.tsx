import React from 'react'

function RemeListItem() {
  return (
    <div>
       <div>
      <div className="container m-2 px-4 py-2 flex justify-center bg-amber-900 rounded-xl opacity-40">
      <h1>If the ball turns red, you have forgotten something</h1>
      </div>
                 <div className='container flex flex-col justify-center'>
                  <p>no reminds</p>
                  <div className='flex justify-center '>
                    <button className="text-green-500 rounded-xl bg-stone-700 p-1 m-1">check</button>
                    <button className="text-rose-950 rounded-xl bg-stone-700 p-1 m-1" >delete</button>
                  </div>
                </div>
                
            </div>
    </div>
  )
}

export default RemeListItem
