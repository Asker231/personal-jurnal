import React from 'react'
import ButtonWrap from '../ButtonWrap/ButtonWrap'

function LeftBar() {
  return (
    <div className="flex flex-col w-[402px] min-h-full p-3 gap-5  lg:border-r-1 border-white ">
    <img src="/public/logo.svg" className="w-[179px] h-[25px]" alt="" />
    <div className="flex flex-col p-3 w-full min-h-full">
    <ButtonWrap>
      <div className="flex flex-row gap-2 w-full justify-around items-center">
        <img className="w-5 h-5 font-bold"  src="/public/icon-plus.svg" alt="" />
      <span className="text-lg font-medium">
        Новое воспоминание
      </span>
      </div>
    </ButtonWrap>
    </div>
</div>
  )
}

export default LeftBar