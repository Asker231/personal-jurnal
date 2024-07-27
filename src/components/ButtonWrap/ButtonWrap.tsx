import { useState } from 'react'
import { IButtonWrap } from '../../interfaces/IButtonWrap'
import cn from 'classnames'
function ButtonWrap({children}:IButtonWrap) {
  const[state,setState] = useState<boolean>(false)
  console.log(state);
  
  return (
    <button onClick={()=>setState(!state)} className={cn("flex items-center justify-cente bg-bg_cart   min-h-10  rounded-[6px] text-white transition duration-[.3s] hover:bg-hover_cart")}>{children}</button>
  )
}

export default ButtonWrap