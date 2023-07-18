import React from "react";
import Header from "../components/Header/Header";

export default function DashboardPage() {
  return (
    <>
    <Header/>
    <div className="page mt-4">
      <div className="row">
        <div className="col">
          <h1 className="titleDashboard">Clientes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2 mt-2">
          <div className="card">
            <div className="card-header">Total</div>
            <div className="card-body">24</div>
          </div>
        </div>
        <div className="col-sm-2 mt-2">
          <div className="card">
            <div className="card-header">Ativos</div>
            <div className="card-body">12</div>
          </div>
        </div>
        <div className="col-sm-2 mt-2">
          <div className="card">
            <div className="card-header">Inativos</div>
            <div className="card-body">12</div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h1 className="titleDashboard">Faturamento</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2 mt-2">
          <div className="card">
            <div className="card-header">Total</div>
            <div className="card-body">R$ 120.000,65</div>
          </div>
        </div>
        <div className="col-sm-2 mt-2">
          <div className="card">
            <div className="card-header">Entrada</div>
            <div className="card-body">R$ 72.358,30</div>
          </div>
        </div>
        <div className="col-sm-2 mt-2">
          <div className="card">
            <div className="card-header">Saida</div>
            <div className="card-body">R$ 47.642,35</div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
