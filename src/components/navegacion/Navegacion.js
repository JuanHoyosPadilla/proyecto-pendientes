import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navegacion.css";
import { FaBars, FaPlusSquare } from "react-icons/fa";

export function Navegacion() {

  const {ref,setModal} = useContext(Context);

  const agregar = () => {
    //ref.current.classList.add('abrir')
    setModal(true)
  };

  const desplegar = () => {
    alert("desplegandooo");
  };
  return (
    <div className="container">
      <div className="logo">
        <span>PendietesApp</span>
      </div>
      <div className="container-botones">
        <button className="btn-agregar" onClick={agregar}>
          Agregar <FaPlusSquare />
        </button>
        <button className="btn-bar" onClick={desplegar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
}
