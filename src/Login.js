import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault(); //this stops the refresh
        //do the login logic.....
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {

            //logged in, redirect to homepage
            history.push("/")

        })
        .catch(e => alert(e.message))
    }

    const register = event => {
        event.preventDefault(); //this stops the refresh
        //do the register logic.....
         auth
         .createUserWithEmailAndPassword(email, password)
         .then(auto => {
             // create a user and logged in, redirect to homepage
             history.push("/")
         })
         .catch(e => alert(e.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                className='login__logo'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png'
                  alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="email" onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                By continuing, you agree 
                to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register } className='login__registerButton'>Create your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login
