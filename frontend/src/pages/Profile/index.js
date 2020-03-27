import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css'

import api from '../../services/api'

export default function Profile() {
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const [incidents, setIncidents] = useState([])

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    function formatCurrency(value) {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    async function handleDeleteIncident(id) {
        try {
            api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incident.id != id))
        } catch (error) {
            alert('Erro ao deletar caso. Tente novamente')
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{formatCurrency(incident.value)}</p>
                        <button onClick={e => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
                        </button>
                    </li>
                ))}
            </ul>
        </div>)
}