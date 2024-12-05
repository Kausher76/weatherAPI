import { useState } from "react";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import TableComponent from "./Components/TableComponent";
import ApiCalling from "./Components/ApiCalling";
import NavScrollExample from "./Components/NavScrollExample";
import WeatherAPI from "./Components/WeatherAPI";
function App() {
  return (
    <>
      {/* <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert> */}
      {/* <TableComponent/> */}
      <NavScrollExample/>
      {/* <ApiCalling/> */}
      <div className="text-center">
        <WeatherAPI />
      </div>
    </>
  );
}

export default App;
