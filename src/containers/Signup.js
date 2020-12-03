import React, { useState, useEffect } from 'react'
import { signup } from '../api/auth' 


function Signup () {
	const [ info, setInfo] = useState({})
	const [ message, setMessage] = useState('')

	const submit = () => {
		setMessage('')
		signup(info)
			.then(res => {
				console.log( res, res.message, "res")
				setMessage(message)
				if(res.message){
					setMessage(message)
				}
				else {
					
				}
			})
	}

    return(
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
							<form action="" className="join-dob">
								<div className="form-group">
									<label>Your email</label>
                                    <input onChange={(e) => setInfo({...info, 'email': e.target.value })} 
                                        type="text" placeholder="example@gmail.com" className="form-control"/>
								</div>
								<div className="form-group">
									<label>Your mobile</label>
                                    <input onChange={(e) => setInfo({...info, 'mobile': e.target.value })} 
                                        type="number" placeholder="9875480015" className="form-control"/>
								</div>
								<div className="row form-group">
									<div className="col">	
										<label>First name*</label>
                                        <input onChange={(e) => setInfo({...info, 'debater_first_name': e.target.value })} 
                                            type="text" placeholder="" className="form-control"/>
									</div>
									<div className="col">	
										<label>Middle name</label>
                                        <input onChange={(e) => setInfo({...info, 'debater_middle_name': e.target.value })} 
                                            type="text" placeholder="" className="form-control"/>
									</div>
									<div className="col">	
										<label>Last name*</label>
                                        <input onChange={(e) => setInfo({...info, 'debater_last_name': e.target.value })} 
                                            type="text" placeholder="" className="form-control"/>
									</div>
								</div>
								<div className="form-group">
									<label>Create password</label>
									<p>Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.</p>
                                    <input onChange={(e) => setInfo({...info, 'password': e.target.value })} 
                                        type="password" placeholder="" className="form-control"/>
								</div>

								<button type="button" className="btn" onClick={submit}>Create Account</button>
								{message != '' ? <p>{message}</p>: null}
								<a href="/" className="back-btn">back</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
    )
}

export default Signup