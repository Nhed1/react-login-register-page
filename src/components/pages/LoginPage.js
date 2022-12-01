import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";

export default function SignInPage() {
  const api = axios.create({
    baseURL: "http://localhost:7777/user",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePostData = (e) => {
    e.preventDefault();
    console.log(email, password);
    const body = {
      username: email,
      password,

      method: "post",
    };

    api
      .post("http://localhost:7777/user", body)
      .then((res) => console.log(res));
  };

  return (
    <form className="text-center m-5-auto" onSubmit={handlePostData}>
      <h2>Faça seu Login</h2>
      <form action="/home">
        <p>
          <label>Nome ou Email</label>
          <br />
          <input
            type="text"
            name="first_name"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          Primeira vez?
          <Link to="/register">Clique aqui para criar sua conta</Link>.
        </p>
        <p>
          <Link to="/">Voltar para Home</Link>.
        </p>
      </footer>
    </form>
  );
}
