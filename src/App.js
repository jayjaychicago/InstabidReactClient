//import InstaTable from "./components/InstaTable";
import Instabid, { InstaForm, DepthTable } from 'instabid';
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  return (
      <main >
        <Instabid exchange="Insta" product="prod" user="julien"></Instabid>
      </main>
  );
}

export default App;