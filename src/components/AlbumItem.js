import React from 'react';

import PropTypes from "prop-types";

const AlbumItem=({apiData, AddFavourite, handleFavouritesClick})=>{
	//console.log(apiData);
	
	   

		return (
			<>
			{ apiData?.map((movieItem, index) => (
					 
						
					<div className='image-container d-flex justify-content-start w-25'>
						<img src={movieItem.Poster} alt='movie'></img>
						
						<div 
						onClick={() => handleFavouritesClick(movieItem)}
						className='overlay d-flex align-items-center justify-content-center'>
						<AddFavourite />
					</div>
					</div>
					
					
				))}
		 	
		 </>
		);
	}
	
		export default AlbumItem;