import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import { Formulario } from "../formulario/Formulario";
import { FaWindowClose} from "react-icons/fa";
import "./modal.css";
export function Modal() {
  const ref = useRef(null);
  const { setModal } = useContext(Context);

  const handelCerrar = () => {
    ref.current.classList.add("btn-cerrar");
    setTimeout(() => {
      setModal(false);
    }, 80);
  };

  return (
    <div className="modal-container">
      <div ref={ref} className="modal-view">
        <div className="modal-header">
          <button onClick={handelCerrar}>Cerrar <FaWindowClose/></button>
        </div>
        <div className="modal-body">
          <Formulario />
        </div>
      </div>
    </div>
  );
}
