import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Button from "../../components/Button/";

export default function ClientesList() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Clientes
            </li>
          </ol>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            Lista de Clientes
            <Link to="/clienteAdd">
              <Button title="+" className="d-flex justify-content-center" />
            </Link>
          </div>
          <div className="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Endereço</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João</td>
                  <td>111.111.111-11</td>
                  <td>Rua A, 123</td>
                  <td>São Paulo</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>222.222.222-22</td>
                  <td>Rua B, 456</td>
                  <td>Rio de Janeiro</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>222.222.222-22</td>
                  <td>Rua B, 456</td>
                  <td>Rio de Janeiro</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>222.222.222-22</td>
                  <td>Rua B, 456</td>
                  <td>Rio de Janeiro</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>222.222.222-22</td>
                  <td>Rua B, 456</td>
                  <td>Rio de Janeiro</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>222.222.222-22</td>
                  <td>Rua B, 456</td>
                  <td>Rio de Janeiro</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>222.222.222-22</td>
                  <td>Rua B, 456</td>
                  <td>Rio de Janeiro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
