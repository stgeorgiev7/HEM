import Modal from "../src/components/modal/Modal";
import Dashboard from "../src/components/dashboard/Dashboard";
import SceneComposer from "../src/components/scenes/SceneComposer";
import EditScene from "../src/components/scenes/EditScene";
import roomsData from "../data/rooms.json"
import devicesData from "../data/devices.json"


export default function Index() {
  return (
    <div>
      <EditScene
      open
      handleClose={() => {alert('close')}} 
      devices={devicesData?.devices}
      rooms={roomsData?.rooms}
      selected={
        {
          "name": "Living Room",
          "type": "living-room",
          "id": 1,
          "propertyId": 1,
          "userId": 1
        }
      }/>
    </div>
  );
}
