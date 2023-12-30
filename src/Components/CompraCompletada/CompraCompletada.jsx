import React from "react";
import { Link } from "react-router-dom";

export default function CompraCompletada() {
  return (
    <div className="flex-grow">
      <h2>Compra Completada!</h2>
      <p>
        El pedido {id} esta registrado en nuestra web en breves la empresa de
        transporte te mandara un numero de seguimiento.
      </p>
      <Link to="/Completed">
        <ArrowLeftIcon className="ArrowLeftIcon" />
        Ir a mi perfil
      </Link>
      <Link to="/Home">
        <ArrowLeftIcon className="ArrowLeftIcon" />
        Volver al inicio
      </Link>
    </div>
  );
}
