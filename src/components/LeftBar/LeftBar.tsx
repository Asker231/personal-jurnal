import React, { useState } from 'react'
import ButtonWrap from '../ButtonWrap/ButtonWrap'


function LeftBar() {
  const[open,setOpen] = useState(false)
  return (
    <div className="flex  flex-col w-[402px] min-h-full p-3 gap-5  lg:border-r-1 border-white ">
    <img src="/public/logo.svg" className="w-[179px] h-[25px]" alt="" />
    <div className="flex flex-col p-3 w-full gap-4 min-h-full">
    <ButtonWrap>
      <div className="flex flex-row gap-2 w-full p-3 justify-around items-center">
        <img className="w-5 h-5 font-bold"  src="/public/icon-plus.svg" alt="" />
      <span onClick={()=>setOpen(!open)} className="text-lg font-medium">
        Новое воспоминание
      </span>
      </div>
    </ButtonWrap>
    </div>

{
  open ? (
    <div className="w-[90%] h-[800px] rounded-xl bg-hover_cart absolute top-10 left-24" >
      <header className="flex justify-end w-full  p-3">
        <div  onClick={()=>setOpen(false)} className=' felx items-center cursor-pointer justify-center rounded-lg w-7 h-7 text-center text-lg bg-white'>
          &times;
         </div>
      </header>
    </div>
  ) : null
}
   
</div>
  )
}

export default LeftBar