import Modal from "../src/components/modal/Modal";
import Dashboard from "../src/components/dashboard/Dashboard";
import SceneComposer from "../src/components/scenes/SceneComposer";
import EditScene from "../src/components/scenes/EditScene";
import roomsData from "../data/rooms.json";
import devicesData from "../data/devices.json";
import AddRoom from "../src/components/rooms/AddRoom";
import ChangeRoom from "../src/components/rooms/ChangeRoom";
import AddDevice from "../src/components/devices/AddDevice";
import Register from "../src/components/register/Register"

export default function Index() {
    return (
        <Register />
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
        // <ChangeRoom
        // open={true}
        // rooms={[
        //   {
        //     "name": "Living Room",
        //     "type": "living-room",
        //     "id": 1,
        //     "propertyId": 1,
        //     "userId": 1
        //   },
        //   {
        //     "name": "Bedroom",
        //     "type": "bedroom",
        //     "id": 2,
        //     "propertyId": 1,
        //     "userId": 1
        //   },
        //   {
        //     "name": "Bathroom",
        //     "type": "bathroom",
        //     "id": 3,
        //     "propertyId": 1,
        //     "userId": 1
        //   },
        //   {
        //     "name": "Toilet",
        //     "type": "toilet",
        //     "id": 4,
        //     "propertyId": 1,
        //     "userId": 1
        //   },
        //   {
        //     "name": "Patio",
        //     "type": "patio",
        //     "id": 5,
        //     "propertyId": 1,
        //     "userId": 1
        //   }
        // ]}
        // selected={{
        //   "id": 1,
        //   "name": "Lightbulb",
        //   "iconUrl": "/images/plug.svg",
        //   "roomId": 1,
        //   "userId": 1
        // }}/>
    );
}
