import "./pendiente.css";
//import axios from "axios";

export function Pendiente({ dato, cambioChecked }) {
  /*   const cambioChecked = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then((result) => setDatos(result.data));
  }; */
  return (
    <div className={`container-pendiente ${dato.prioridad}`}>
      <div className="titulo-pendiente">
        <span>{dato.pendiente}</span>
      </div>
      <div className="prioridad-pendiente">
        <span>{dato.prioridad}</span>
      </div>
      <div className="check-container">
        <label>
          Realizar Pendiente
          <input
            type="checkbox"
            checked={dato.estado}
            onChange={() => cambioChecked(dato._id)}
          />
        </label>
      </div>
    </div>
  );
}
