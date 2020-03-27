import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css'
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await api.post('sessions', { id })
            console.log(response.data)
        } catch (error) {
            alert('Falha no login. Tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="baack-link" to="/signup"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImage} alt="Heroes" />
        </div>)
}