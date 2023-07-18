import React from "react";
import { Link } from "react-router-dom";
import MinhaImagem from "../../assets/images/icon.png";

export default function Header() {
  return (
    <>
      <div class="topnav navbar navbar-expand shadow justify-content-between  navbar-dark">
        <div class="">
    <Link to="/dashboard">
    <img src={MinhaImagem} alt="Minha Imagem" width={60} />
    </Link>
        </div>
        <Link className="p-2 logoff Link" to="/">
          Fazer Logoff
        </Link>
      </div>
    </>
  );
}
