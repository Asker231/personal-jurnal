import React from 'react'

function ButtonWrap({children}) {
  return (
    <button className=" flex items-center justify-cente  bg-bg_cart min-h-10  rounded-[6px] text-white transition duration-[.3s] hover:bg-hover_cart">{children}</button>
  )
}

export default ButtonWrap