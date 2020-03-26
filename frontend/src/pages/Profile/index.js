import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>Caso teste</p>

                    <strong>VALOR:</strong>
                    <p>120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>)
}