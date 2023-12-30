import React from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowLeftIcon from "@mui/icons-material/ArrowBack";

function ErrorCompra() {
  return (
    <div className="flex-grow">
      <ClearIcon className="ClearIcon" />
      <h2>Error en el pago</h2>
      <p>
        Ups, algo ha salido mal en el proceso de pago, revisa tus datos e
        inténtalo de nuevo
      </p>
      <Link to="/cancel">
        <ArrowLeftIcon className="ArrowLeftIcon" />
        Volver al carrito
      </Link>
    </div>
  );
}

export default ErrorCompra;
