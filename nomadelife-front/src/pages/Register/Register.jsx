<<<<<<< HEAD
import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate} from 'react-router-dom'

const Register = () => {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('')
     const [name, setName] = useState('')
     const [confirmpassword, setConfirmpassword] = useState('')

     const { createUser, error:authError, loading } = useAuthentication()
     const navigate = useNavigate()

     const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email,
            password

        }
        const res = await createUser(user)

        console.table(res)
        navigate("/Login")
     }

     useEffect(()=>{
        if(authError){
            setError(authError)
        }
     })

  return (
    <div className={styles.register}>
        <h1>Cadastrar no Nomade Life</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>E-mail</span>
                <input type='email'
                name='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Digite seu E-mail'></input>
            </label>
            <label>
                <span>Nome</span>
                <input type='text'
                name='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder='Digite seu Nome'></input>
            </label>
            <label>
                <span>Senha</span>
                <input type='password'
                name='senha'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Digite sua Senha'></input>
            </label>
            <label>
                <span>Nome</span>
                <input type='password'
                name='confirmeSenha'
                required
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)} 
                placeholder='Confime sua Senha'></input>
            </label>
            {!loading && <button className='btn'>Cadastro</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}


        </form>

    </div>
  )
}
export default Register
=======
import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate} from 'react-router-dom'

export const Register = () => {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('')
     const [name, setName] = useState('')
     const [confirmpassword, setConfirmpassword] = useState('')

     const { createUser, error:authError, loading } = useAuthentication()
     const navigate = useNavigate()

     const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email,
            password

        }
        const res = await createUser(user)

        console.table(res)
        navigate("/Login")
     }

     useEffect(()=>{
        if(authError){
            setError(authError)
        }
     })

  return (
    <div className={styles.register}>
        <h1>Cadastrar no Nomade Life</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>E-mail</span>
                <input type='email'
                name='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Digite seu E-mail'></input>
            </label>
            <label>
                <span>Nome</span>
                <input type='text'
                name='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder='Digite seu Nome'></input>
            </label>
            <label>
                <span>Senha</span>
                <input type='password'
                name='senha'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Digite sua Senha'></input>
            </label>
            <label>
                <span>Nome</span>
                <input type='password'
                name='confirmeSenha'
                required
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)} 
                placeholder='Confime sua Senha'></input>
            </label>
            {!loading && <button className='btn'>Cadastro</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}


        </form>

    </div>
  )
}
>>>>>>> a48cf12a17b319bfc71cb577f5c05faf9bc4f218
