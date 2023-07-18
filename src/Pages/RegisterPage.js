import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import MinhaImagem from '../assets/images/icon.png';

export default function RegisterPage() {
  return (
    <div className='container'>
      <div className='card w-100 loginCard'>
        <div className='card-header d-flex justify-content-center'>
          <img src={MinhaImagem} alt="Minha Imagem" width={60} />

        </div>
        <div className='card-body'>
          <label for="nameInput" class="form-label">Seu nome completo</label>
          <input type="email" class="form-control" id="nameInput" placeholder="" />
          <label for="emailInput" class="form-label mt-3">Email</label>
          <input type="email" class="form-control" id='emailInput' placeholder="example@email.com" />

          <label for="senhaInput" class="form-label mt-3">Senha</label>
          <input type="password" class="form-control mb-4" id="senhaInput" />

          <div className='row'>
            <div className='col-sm-6'>
              <Link title="Entrar" to="/"><Button title="Registrar-me"></Button></Link>
            </div>
            <div className='col-sm-6 d-flex justify-content-end'>
              <p>Já tem conta?</p>
              <Link to="/">Fazer Login</Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
