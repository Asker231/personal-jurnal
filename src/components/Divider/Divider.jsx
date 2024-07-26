import React from 'react'

function Divider({horisontal}) {
    if(horisontal){
        return <div className="w-full h-[1px] bg-hover_cart"></div>
    }
   return <div className="w-[1px] min-h-full bg-hover_cart"></div>
}

export default Divider