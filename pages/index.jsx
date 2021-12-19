import Modal from "../src/components/modal/Modal";
import Dashboard from "../src/components/dashboard/Dashboard";
import SceneComposer from "../src/components/scenes/SceneComposer";
import EditScene from "../src/components/scenes/EditScene";
import roomsData from "../data/rooms.json"
import devicesData from "../data/devices.json"


export default function Index() {
  return (
    <EditScene
    rooms={roomsData?.rooms}
    devices={devicesData?.devices}
    selected={
      {
        "id": 1,
        "name": "Lightbulb",
        "iconUrl": "/images/plug.svg",
        "roomId": 1,
        "userId": 1
      }
    } />
  )
}
