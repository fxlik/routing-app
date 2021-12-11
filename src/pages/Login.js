import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({setLogin}) => {
    const history = useHistory()
    return <div>
        <h2>Halaman Login</h2>
        <button onClick={() => {
            setLogin(true)
            history.push('/')
        }}>Login</button>
    </div>
}

export default Login