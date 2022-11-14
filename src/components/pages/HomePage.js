import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">Bem vindo a aplicação</h1>
      <Link to="/">
        <button className="primary-button">Desconectar</button>
      </Link>
    </div>
  );
}
