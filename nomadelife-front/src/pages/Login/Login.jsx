import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-route-dom'
import { useAuthentication } from '../../hooks/useAuthentication'
import { styles } from './login.module.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {login, error: authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async () => {
        e.preventDefault()
        setError('')
        const user = (
            email,
            password
        )

        const res = await login(user)

        console.table(res)
        navigate("/post/create")

        useEffect(() => {
            if (authError) {
                setError(authError)
            }
        }, [authError])
    }
    return (
        <div className={styles.login} >
            <h1>Entrar no Nomade life</h1>
            <p>Entre no ambiente e compartilhe suas experiencias</p>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>Email</span>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Entre com seu email'
                        required
                    />
                </label>
                <label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onchange={(p) => setPassword(p.target.value)}
                        placeholder='Entre com sua senha'
                        required
                    />
                </label>

                {!loading && <button className='btn'>Login</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {loading && <button className='error'>(error)</button>}

            </form>
        </div>
    )
}

export default Login