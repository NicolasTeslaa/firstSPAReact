import React from 'react'
import Button from '../components/Button'

export default function LoginPage() {
    return (
        <div className='card mt-5'>
            <div className='card-header'>Login</div>
            <div className='card-body'>
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                <label for="exampleFormControlInput1" class="form-label mt-3">Password</label>
                <input type="password" class="form-control mb-4" id="exampleFormControlInput1" placeholder="*********" />

                <div className='row'>
                    <div className='col-sm-6'>
                        <Button title="Entrar" />
                    </div>
                    <div className='col-sm-6 d-flex justify-content-end'>
                        <p>Ainda não tem conta?</p>
                        <a href=''>Registrar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
