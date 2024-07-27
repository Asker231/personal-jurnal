import { FormEvent } from 'react'
import Divider from '../Divider/Divider'
type MyForm = {
    dates:{
      value:string
    },
    title:{
      value:string
    },
    text:{
      value:string
    },
}
function RightBar() {
  function GetValue(e:FormEvent){
    e.preventDefault()
    let target = e.target as typeof e.target & MyForm
    console.log(target.dates.value);
    console.log(target.title.value);
    console.log(target.text.value);
    
  }
  return (
    <div className="flex flex-col w-full min-h-full p-3">
      <form onSubmit={(e)=>GetValue(e)} className='flex flex-col w-full p-5 gap-10'>
        <header className="flex w-full items-center justify-between">
         <div className="flex flex-col gap-2">
         <input name='title'  className="text-white text-3xl font-bold outline-none bg-transparent" placeholder='Заголовок...' type="text"/>
         <Divider horisontal={true}/> 
         </div>
          <img className="w-8 h-8" src="/public/arhiv.svg" alt="" />
        </header>
        <div className="VStack w-full gap-5">
              <div className="HStack">
                  <input className="bg-inherit text-white" type="date" name="dates" id="" />
              </div>
              <Divider horisontal={true}/>
              <div className="HStack gap-10">
                  <img src="/public/folder-icon.svg" className="w-5 h-5" alt="" />
                    <span className="text-[#A3A3A3] font-semibold">Метки</span>
              </div>
              <Divider horisontal={true}/>
              <textarea   name="text" rows={20} placeholder='Ваш текст...' className=" resize-none outline-none text-lg p-2 text-white bg-inherit rounded-lg border border-hover_cart"  id=""></textarea>
        </div>
        <div className="HStack justify-start">
            <button className=  " text-white text-lg bg-buttonbg  hover:bg-buttonHover w-[135px] h-10 rounded-md">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

export default RightBar