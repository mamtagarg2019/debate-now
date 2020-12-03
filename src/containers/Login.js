import React, { useState } from 'react'
import { connectAdvanced } from 'react-redux'
import { checkUserEmail, login} from '../api/auth'

function Login () {
	const [ info, setInfo] = useState({})
	const [ emailVerified, setEmailVerified] = useState(false)
	const [ message, setMessage] = useState('')
		
	const submit = () => {
		setMessage("")
		if(emailVerified){
			login(info)
				.then(res => {
					if(res.message){
						setMessage(res.message)
					}
					else {
						setInfo({})
						localStorage.setItem('user', JSON.stringify(res))
					}
				})
		}	
		else {
			checkUserEmail(info)
			.then(res => {
				if(res.message){
					setMessage(res.message)
				}
				else 
					setEmailVerified(true)
			})
		} 
	}

    return (
        <>
        <section className="join-debate-world">
			<div className="container">
				<div className="row padding-l-r">
					<div className="col-12 col-lg-7">
						<div className="join-debate-img">
							<h2>Debate with anyone, anywhere. <i>For free</i>.</h2>
							<p>Build your debating skills by engaging in structured and customizable debate formats.</p>
							<img src="images/debate-vector-2.svg" alt="debate-vector" />
						</div>
					</div>
					
					<div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
						<div className="join-debate-content">							
							<form className="join-dob">
								<div className="form-group mb-15">
									<label>Your email</label>
                                    <input
                                        onChange={(e) => setInfo({ ...info, 'email' : e.target.value })} 
                                        type="text" placeholder="example@gmail.com" className="form-control"/>
								</div>
								
								{emailVerified ? <div className="form-group">
									<label>Create password</label>
									<p>Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.</p>
                                    <input 
                                        onChange={(e) => setInfo({ ...info, 'password' : e.target.value })}
                                        type="password" placeholder="" className="form-control"/>
								</div> : null}

								<button type="button" className="btn" onClick={submit}>Login</button>
								{message != '' ? <p>{message}</p>: null}
								<a href="/" className="back-btn" >back</a>
							</form>
							
						</div>
					</div>
				</div>
			</div>
		</section>
    </>)
}

export default Login