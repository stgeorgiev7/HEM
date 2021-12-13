import Modal from "../src/components/modal/Modal";
import Dashboard from "../src/components/dashboard/Dashboard";
import SceneComposer from "../src/components/scenes/SceneComposer";
import roomsData from "../data/rooms.json"
import devicesData from "../data/devices.json"

export default function Index() {
  return <SceneComposer devices={devicesData} rooms={roomsData} />;
}
