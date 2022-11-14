import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function SignInPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>Faça seu Login</h2>
      <form action="/home">
        <p>
          <label>Nome ou Email</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Senha</label>
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          Primeira vez?{" "}
          <Link to="/register">Clique aqui para criar sua conta</Link>.
        </p>
        <p>
          <Link to="/">Voltar para Home</Link>.
        </p>
      </footer>
    </div>
  );
}
