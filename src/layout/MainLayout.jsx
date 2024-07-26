
import RightBar from '../components/RightBar/RightBar'
import Divider from "../components/Divider/Divider"
import LeftBar from "../components/LeftBar/LeftBar"

function MainLayout() {
  return (
    <div className="flex relative flex-row w-full min-h-lvh bg-app_bg">
        <LeftBar/>
        <Divider />
        <RightBar/>

    </div>
  )
}

export default MainLayout