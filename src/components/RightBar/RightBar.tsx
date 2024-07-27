import React, { ChangeEvent } from 'react'
import Divider from '../Divider/Divider'


function RightBar() {
  return (
    <div className="flex flex-col w-full min-h-full p-3">
      <form className='flex flex-col w-full p-5'>
        <header className="flex w-full items-center justify-between">
         <div className="flex flex-col gap-2">
         <input name='title'  className="text-white text-3xl font-bold outline-none bg-transparent" placeholder='Заголовок...' type="text"/>
         <Divider horisontal={true}/> 
         </div>
          <img className="w-8 h-8" src="/public/arhiv.svg" alt="" />
        </header>
        <div className="VStack w-full">
              <div className="HStack">
                  <input className="bg-inherit text-white" type="date" name="date" id="" />
              </div>
              <Divider horisontal={true}/>
              <div className="HStack">

              </div>
              <Divider horisontal={true}/>
        </div>
      </form>
    </div>
  )
}

export default RightBar