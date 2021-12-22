import Modal from "../src/components/modal/Modal";
import Dashboard from "../src/components/dashboard/Dashboard";
import SceneComposer from "../src/components/scenes/SceneComposer";
import EditScene from "../src/components/scenes/EditScene";
import roomsData from "../data/rooms.json"
import devicesData from "../data/devices.json"
import AddRoom from "../src/components/rooms/AddRoom";
import ChangeRoom from "../src/components/rooms/ChangeRoom";
import Login from "../src/components/login/Login";
import Register from "../src/components/register/Register"


export default function Index() {
  return (
    // <EditScene
    //   rooms={roomsData?.rooms}
    //   devices={devicesData?.devices}
    //   selected={
    //     {
    //       "id": 1,
    //       "name": "Lightbulb",
    //       "iconUrl": "/images/plug.svg",
    //       "roomId": 1,
    //       "userId": 1
    //     }
    //   }
    //   onScene={() => { }}
    //   onSubmit={() => { }} />
    <div>
      <Login />

      <Register />
    </div>
  )
}
