import React from 'react'
import './auth-form.css'
import signupImg from '../../public/happyPasta.png'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  if (displayName === 'Login') {
    return (
      <div>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit} name={name} id="login">
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button className="loginBtn" type="submit">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <div className="googleSignup">
          <a className="googleLink" href="/auth/google">
            {displayName} with Google
          </a>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit} name={name} id="signup">
          <div className="inputs">
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div className="inputs">
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>
          <div className="inputs">
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <div className="inputs">
            <label htmlFor="address">
              <small>Address</small>
            </label>
            <input name="address" type="text" />
          </div>
          <div className="inputs">
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button className="signupBtn" type="submit">
              {displayName}
            </button>
            <img id="signupNoodle" src={signupImg} />
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <div className="google">
          <a className="googleLink" href="/auth/google">
            {displayName} with Google
          </a>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name

      const email = evt.target.email.value
      const password = evt.target.password.value
      if (formName === 'login') {
        const firstName = null
        const lastName = null
        const address = null
        dispatch(auth(firstName, lastName, address, email, password, formName))
      } else {
        const firstName = evt.target.firstName.value
        const lastName = evt.target.lastName.value
        const address = evt.target.address.value
        dispatch(auth(firstName, lastName, address, email, password, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
