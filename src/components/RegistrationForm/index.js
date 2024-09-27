// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameErr: '',
    lastNameErr: '',
    isSubmit: false,
    firstName: '',
    lastName: '',
  }

  onSubmitting = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({isSubmit: false, lastNameErr: true, firstNameErr: true})
      console.log('no names are given')
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstNameErr: true})
      //   console.log('last name not given')
    } else if (firstName !== '' && lastName === '') {
      this.setState({lastNameErr: true})
    } else {
      this.setState({isSubmit: true})
    }
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameErr: '',
      lastNameErr: '',
      isSubmit: false,
    })
  }

  renderSuccessPage = () => (
    <div className="success-page-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        onClick={this.resetForm}
        className="submit-another-button"
        type="button"
      >
        Submit Another Response
      </button>
    </div>
  )

  onFirstNameBlur = event => {
    // this.setState({firstName: event.target.value})
    // console.log(this.firstName)
    event.preventDefault()
    if (event.target.value === '') {
      this.setState({firstNameErr: true})
    } else {
      this.setState({firstNameErr: false})
    }
  }

  getLastName = event => {
    this.setState({lastName: event.target.value})
  }

  getFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameBlur = event => {
    event.preventDefault()
    // this.setState({lastName: event.target.value})
    if (event.target.value === '') {
      this.setState({lastNameErr: true})
    } else {
      this.setState({lastNameErr: false})
    }
  }

  renderRegForm = () => {
    const {firstNameErr, lastNameErr} = this.state
    const firstNameClass = firstNameErr ? 'first-name-input' : null
    const lastNameClass = lastNameErr ? 'last-name-input' : null
    return (
      <form className="actual-form" onSubmit={this.onSubmitting}>
        <div className="inputs-container">
          <div className="input-label-container">
            <label className="label" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstName"
              className={`input-field ${firstNameClass}`}
              onBlur={this.onFirstNameBlur}
              onChange={this.getFirstName}
              placeholder="First name"
            />
            {firstNameErr && <p className="err-msg">Required</p>}
          </div>
          <div className="input-label-container">
            <label className="label" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              type="text"
              id="lastName"
              className={`input-field ${lastNameClass}`}
              onBlur={this.onLastNameBlur}
              onChange={this.getLastName}
              placeholder="Last name"
            />
            {lastNameErr && <p className="err-msg">Required</p>}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmit} = this.state
    return (
      <div className="form-container">
        <div className="form">
          <h1 className="heading">Registration</h1>
          {isSubmit ? this.renderSuccessPage() : this.renderRegForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
