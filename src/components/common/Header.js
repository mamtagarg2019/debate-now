import React from 'react'


function Header () {
    return(
        <header className="main-navigation">
			<nav className="navbar navbar-expand-lg navbar-light">
			<a className="navbar-brand" href="javascript:void(0);"><img src="images/logo.svg" alt="logo" /></a>
			<span style={{ fontSize:'30px', 'cursor': 'pointer' }} onclick={() => {}} className="menu-icon">&#9776;</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
				<div className="header_search">
                    <form role="search" method="get" className="search-form form mx-auto desktop-view" action="">
                        <label className="label-search">Search</label>
                        <label>
                            <span className="screen-reader-text">Search for...</span>
                            <input type="search" className="search-field" placeholder="By topic, format, language, motion" value="" name="s" title="" />
                        </label>
                        <button type="submit" className="search-submit button"><img src="images/search-icon.svg" alt="search-icon"/></button>
                    </form>
			    </div>
				<ul className="navbar-nav">
				  <li className="nav-item active">
					<a className="nav-link" href="javascript:void(0);">Faq <span className="sr-only">(current)</span></a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="/login"><img src="images/user.svg" alt="user" className="mr-2"/>Log In</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link custom-btn" href="/signup">Sign Up</a>
				  </li>
				</ul>	
			</div>
		</nav>
	</header>)
}

export default Header