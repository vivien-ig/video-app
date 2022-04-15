import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Album=(props)=>{
	const {apiData} = props;

	/* console.log(props);
	console.log(props.apiData);
	
	console.log(Array.isArray(apiData));
	console.log(typeof(apiData));
	console.log(apiData.length);
	let first=apiData[0];
	console.log(first);
	console.log(Array.isArray(first));
	console.log(typeof(first)); */
	
	{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}


	//const listItem= list.map((item)=> <> <li >{item} {"  "} 
const newdata= apiData.map((item)=>
					
					item.map((newitem)=>
					<>
					<div key={newitem.id} className="col-4 mb-5 card "
					style={{
						border:"2px solid green",
						height:"600px"
					}}
					>
						<img className="card w-100 h-100 card-img-top p-5 "
						style={{
							backgroundImage: `url(${newitem.background_image})`,
							backgroundPosition: 'center',
						   backgroundSize: 'cover',
						   backgroundRepeat: 'no-repeat',
							
						
						}} />
							{/* <img className="bd-placeholder-img card-img-top"/> */}
							 
							
							
		
							<div className="card-body">
							<p className="card-text fs-2">{newitem.name} {" "} {newitem.released}</p>
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
								<button type="button" className="btn btn-sm btn-outline-info p-4">Info</button>
								<button type="button" className="btn btn-sm btn-outline-primary p-4">Play game</button>
								</div>
								<small className="text-muted">9 mins</small>
							</div>
							</div>
						</div>
						
					
					</>
						
					)
				)
	
	return(
<div>		
	<Header />
	<main>

		<section className="py-5 text-center container">
			<div className="row py-lg-5">
			<div className="col-lg-6 col-md-8 mx-auto">
				<h1 className="fw-light">Album example</h1>
				<p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
				<p>
				<a href="#" className="btn btn-primary my-2">Main call to action</a>
				<a href="#" className="btn btn-secondary my-2">Secondary action</a>
				</p>
			</div>
			</div>
		</section>

		<div className="album py-5 bg-light">
			<div className="container">

			
			
			
				<div className="row">
				{newdata}
				</div>
			
		
		
		
			</div>
			
		</div>

	</main>

	<Footer />

</div>
	)
}

export default Album;