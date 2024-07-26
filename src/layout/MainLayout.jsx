
import Divider from "../components/Divider/Divider"
import LeftBar from "../components/LeftBar/LeftBar"
import RightBar from "../components/RightBar/RightBar"



function MainLayout() {
  return (
    <div className="flex flex-row w-full min-h-lvh bg-app_bg">
        <LeftBar/>
        <Divider />
        <RightBar/>

    </div>
  )
}

export default MainLayout