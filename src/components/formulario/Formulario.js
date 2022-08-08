import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import "./formulario.css";
import { FaAngleUp } from "react-icons/fa";
import { useId } from "react-id-generator";

export function Formulario() {
  const [htmlId] = useId();
  const OPTIONS = ["Alta", "Media", "Baja"];
  const [isactive, setIsactive] = useState(false);
  const [prioridad, setSelect] = useState("Sin Prioridad");
  const [pendiente, setPendiente] = useState("");
  const { guardarDatos } = useContext(Context);

  const obtenerDatos = async (e) => {
    e.preventDefault();
    const datosForm = {
      pendiente,
      prioridad,
    };
    //localStorage.setItem("hola", "esto es una prueba");
    await guardarDatos(datosForm);
  };

  return (
    <>
      <form className="container-form" onSubmit={obtenerDatos}>
        <div className="form">
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => setPendiente(e.target.value)}
              placeholder="¿Que pendiente tienes?"
            />
          </div>
          <div
            className="select-container"
            onClick={() => setIsactive(!isactive)}
          >
            <div className="select-titles">
              <span>{prioridad}</span>
              <FaAngleUp />
            </div>
            {isactive && (
              <ul className={isactive ? "ul" : "cerrarul"}>
                {OPTIONS.map((option) => (
                  <li
                    key={option}
                    onClick={(e) => setSelect(e.target.textContent)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="btn-container">
          <button>Agregar</button>
        </div>
      </form>
    </>
  );
}
