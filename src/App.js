import { useContext } from "react";
import { Context } from "./context/Context";
import "./App.css";
import { Modal } from "./components/modal/Modal";
import { Pendiente } from "./components/pendiente/Pendiente";

function App() {
  const { modal, datos,cambioChecked} = useContext(Context);

  return (
    <div className="App">
      {modal ? <Modal /> : ""}
      <div className="pendientes">
        {!datos
          ? ""
          : datos
              .filter(dato => dato.estado == false)
              .map((dato) => {
              return <Pendiente key={dato._id} dato={dato} cambioChecked={cambioChecked} />;
            })}
      </div>
    </div>
  );
}

export default App;
