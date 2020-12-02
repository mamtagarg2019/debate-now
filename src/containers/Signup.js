import React from 'react'


function Signup () {
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
									<input type="text" placeholder="example@gmail.com" className="form-control"/>
								</div>
								<div className="form-group">
									<label>Your mobile</label>
									<input type="number" placeholder="9875480015" className="form-control"/>
								</div>
								<div className="row form-group">
									<div className="col">	
										<label>First name*</label>
										<input type="text" placeholder="" className="form-control"/>
									</div>
									<div className="col">	
										<label>Middle name</label>
										<input type="text" placeholder="" className="form-control"/>
									</div>
									<div className="col">	
										<label>Last name*</label>
										<input type="text" placeholder="" className="form-control"/>
									</div>
								</div>
								<div className="form-group">
									<label>Create password</label>
									<p>Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.</p>
									<input type="password" placeholder="" className="form-control"/>
								</div>

								<button type="submit" className="btn">create account</button>

								<a href="#" className="back-btn">back</a>
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