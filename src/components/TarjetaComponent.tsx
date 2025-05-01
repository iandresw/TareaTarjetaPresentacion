import React from "react";
import { Tarjeta } from "../models/Tarjeta";
import App from './App.tsx'


export default function TarjetaComponent(props: Tarjeta){
    return(
    <div className="card">
      <div>
        <h2>{props.nombre} {props.apellido}</h2>
        <p>Desarrollador Full Stack — {props.empresa} </p>
      </div>
      <div className="info">
        <p><strong>Email:</strong> {props.correo}</p>
        <p><strong>Tel:</strong> {props.telefono}</p>
      </div>
    </div>
    )
}
    
React

