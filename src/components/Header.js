import React from 'react';

const Header=()=>{

	return(

		<header>
		<div className="collapse bg-info" id="navbarHeader">
		  <div className="container">
			<div className="row">
			  <div className="col-sm-8 col-md-7 py-4">
				<h4 className="text-white">About Vivien's Movie Web Page:</h4>
				<p className="text-muted">A simple web page containing list of movie posters from OMDB WEB API. Click the Search field and start typing to search for your favourite movie poster. Add to favourites or delete from favourites as desired.</p>
			  </div>
			  <div className="col-sm-4 offset-md-1 py-4">
				<h4 className="text-white">Contact Me</h4>
				<ul className="list-unstyled">
				<li><a target="_blank" href="https://www.thevivienbrand.com" className="text-white">My Portfolio site</a></li>	
				  <li><a target="_blank" href="https://github.com/vivien-ig" className="text-white">Github</a></li>
				  <li><a target="_blank" href="https://www.linkedin.com/in/vivien-igweze/" className="text-white">Connect on linkedin</a></li>
				  <li><a target="_blank" href="vivienigweze@gmail.com" className="text-white">Email me</a></li>
				</ul>
			  </div>
			</div>
		  </div>
		</div>
		<div className="navbar navbar-dark bg-dark shadow-sm">
		  <div className="container">
			<a href="#" className="navbar-brand d-flex align-items-center">
			  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
			  <strong> Movies List</strong>
			</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
		  </div>
		</div>
	  </header>

	)}
	export default Header;