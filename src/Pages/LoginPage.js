import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import MinhaImagem from '../assets/images/icon.png';

export default function LoginPage() {
    return (
        <div className='container'>
            <div className='card w-100 loginCard'>
                <div className='card-header d-flex justify-content-center'>
                    <img src={MinhaImagem} alt="Minha Imagem" width={60} />

                </div>
                <div className='card-body'>
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                    <label for="exampleFormControlInput1" class="form-label mt-3">Password</label>
                    <input type="password" class="form-control mb-4" id="exampleFormControlInput1" placeholder="*********" />

                    <div className='row'>
                        <div className='col-sm-6'>
                            <Link title="Entrar" to="/dashboard"><Button title="Entrar"></Button></Link>
                        </div>
                        <div className='col-sm-6 d-flex justify-content-end'>
                            <p>Ainda não tem conta?</p>
                            <Link to="/registrar">Registrar</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
