import React from "react";
import { Link } from "react-router-dom";
import MinhaImagem from '../../assets/images/icon.png';

export default function Header() {
  return (
    <div
      class="topnav navbar navbar-expand shadow justify-content-between  navbar-dark"
      id="sidenavAccordion"
    >
      <div class="">
        <button
          click="toogleMenu()"
          class="btn btn-icon order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
          id="sidebarToggle"
        >
          <svg
            height="15"
            viewBox="0 0 271 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4797 10.5063H260.396"
              stroke="#292D32"
              stroke-width="20.8264"
              stroke-linecap="round"
            />
            <path
              d="M10.4797 79.9276H260.396"
              stroke="#292D32"
              stroke-width="20.8264"
              stroke-linecap="round"
            />
            <path
              d="M10.4797 149.349H260.396"
              stroke="#292D32"
              stroke-width="20.8264"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <img src={MinhaImagem} alt="Minha Imagem" width={60} />
      <Link className="p-2" to="/">
        Sair
      </Link>
    </div>
  );
}
