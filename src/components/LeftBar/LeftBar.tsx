import React, { useState } from 'react'
import ButtonWrap from '../ButtonWrap/ButtonWrap'
import PostInfo from '../PostInfo/PostInfo'


function LeftBar() {

  return (
    <div className="flex  flex-col w-[402px] min-h-full p-3 gap-5  lg:border-r-1 border-white ">
    <img src="/public/logo.svg" className="w-[179px] h-[25px]" alt="" />
    <div className="flex flex-col p-3 w-full gap-4 ">
      <ButtonWrap>SOome info</ButtonWrap>
    </div>
  
   
</div>
  )
}

export default LeftBar