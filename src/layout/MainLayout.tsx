import Divider from "../components/Divider/Divider"
import LeftBar from "../components/LeftBar/LeftBar"
import RightBar from "../components/RightBar/RightBar"


function MainLayout() {
  return (
    <div className="flex relative flex-row w-full min-h-lvh bg-app_bg">
        <LeftBar/>
        <Divider horisontal={false} />
        <RightBar/>
    </div>
  )
}

export default MainLayout