import React from 'react'



function LandingPage () {
    return(
        <section className="join-debate-world">
			<div className="container">
				<div className="row padding-l-r">
					<div className="col-12 col-lg-7">
						<div className="join-debate-img">
							<h2>Debate with anyone, anywhere. <i>For free</i>.</h2>
							<p>Build your debating skills by engaging in structured and customizable debate <br/> formats.</p>
							<img src="images/debate-vector-2.svg" alt="debate-vector" />
						</div>
					</div>
					
					<div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
						<div className="join-debate-content">
							<h5>Join DebateNow as a </h5>
							<ul className="d-flex align-items-center">
								<li><a className="nav-link custom-btn active" href="javascript:void(0);">Debater</a></li>
								<li><a className="nav-link custom-btn" href="javascript:void(0);">Parent</a></li>
								<li><a className="nav-link custom-btn" href="javascript:void(0);">Teacher</a></li>
							</ul>
							
							<div className="join-dob">
							<h5>What is your date of birth?</h5>
								<form className="">
									<select  id ="month" name = "mm" onchange="change_month(this)">
									</select>
									<select id ="day" name = "dd" >
									</select>
									<select id ="year" name = "yyyy" onchange="change_year(this)">
									</select>
								</form>
							</div>	
							
							<div className="debate-social">
								<ul>
									<li><a href="javascript:void(0);">
										<span><img src="images/zoom.svg" alt="Zoom"/></span>
										Continue with Zoom</a></li>
									<li><a href="javascript:void(0);">
										<span><img src="images/google-plus.svg" alt="Google"/></span>
										Continue with Google</a></li>
									<li><a href="javascript:void(0);">
										<span><img src="images/fb.svg" alt="Facebook"/></span>
										Continue with Facebook</a></li>
									<li><a href="/login">
                                            <span>
                                                <img src="images/email.svg" alt="Email"/>
                                            </span>
										Continue with Email</a></li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default LandingPage