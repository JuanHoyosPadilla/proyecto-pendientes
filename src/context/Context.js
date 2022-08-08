import { createContext, useRef, useState,useEffect } from "react";
import axios from 'axios';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const ref = useRef(null);
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
   // setDatos(JSON.parse(localStorage.getItem('datos')))
   axios.get('http://localhost:3001/')
    .then(({data}) => setDatos(data))
    .catch(error => console.log(error))
  },[datos])

  const cambioChecked = async(id) => {
   await axios
      .put(`http://localhost:3001/update/${id}`)
  };

  const guardarDatos = (data) => {
/*      if (data.select === "Prioridad" || data.pendiente === "") {
      console.log("No se puede guardar los datos");
    } else {
        if(localStorage.getItem('datos') === null){
            let arrayDatos = []
            arrayDatos.push(data)
            localStorage.setItem('datos', JSON.stringify(arrayDatos))
        }else {
            let arrayDatos = JSON.parse(localStorage.getItem('datos'))
            arrayDatos.push(data)
            localStorage.setItem('datos', JSON.stringify(arrayDatos))
        }
      console.log("Datos guardados");
    }  */
    axios.post('http://localhost:3001/npendiente',data)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    setModal(!modal)
  };

  return (
    <Context.Provider value={{ ref, modal, setModal, setDatos, guardarDatos,datos,cambioChecked }}>
      {children}
    </Context.Provider>
  );
};
