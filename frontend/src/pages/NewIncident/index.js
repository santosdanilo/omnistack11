import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImage from '../../assets/logo.svg'

import api from '../../services/api'

export default function NewIndicent() {
    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso. Tente novamente')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link"><FiArrowLeft size={16} color="#E02041" />Voltar para home</Link>
                </section>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Titulo do caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Valor em reai" value={value} onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}