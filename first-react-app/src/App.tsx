// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["Mumbai", "Delhi", "Bangalore"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // Alerts
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setAlertVisible(!alertVisible)}>My button</Button>
      {alertVisible && <Alert>My alert</Alert>}
    </div>
  );
}

export default App;
