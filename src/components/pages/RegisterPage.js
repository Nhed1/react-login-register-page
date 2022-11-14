import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function SignUpPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>Crie sua conta</h2>
      <form action="/home">
        <p>
          <label>Nome</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Email</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Senha</label>
          <br />
          <input type="password" name="password" requiredc />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>
            Concordo com os{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              termos de serviço
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Registrar
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Voltar para Home</Link>.
        </p>
      </footer>
    </div>
  );
}
