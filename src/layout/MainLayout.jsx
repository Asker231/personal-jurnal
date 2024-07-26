
import LeftBar from "../components/LeftBar/LeftBar"
import RightBar from "../components/RightBar/RightBar"



function MainLayout() {
  return (
    <div className="flex flex-row w-full min-h-lvh bg-app_bg">
        <LeftBar/>
        <div className="w-[1px] min-h-full bg-hover_cart"></div>
        <RightBar/>

    </div>
  )
}

export default MainLayout