import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AlbumItem from './components/AlbumItem';
import MovieHeadingRow from './components/MovieHeadingRow';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourites from './components/RemoveFavourites';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App=()=> {

  const [apiData, setApiData] = useState([]);
  const [searchValue, setSearchValue] = useState('inception');
  const [favourites, setFavourites] = useState([]);
  const moviesUrl=`/api/movies/:${searchValue}`;
  //const moviesUrl=`/api/movies`;

  const getApiData=async(searchValue)=>{
    try{
      const {data} = await axios.get(moviesUrl)
     // console.log(data);
      console.log(data.Search)
      
//if (data.Search) 
  
  setApiData(data.Search);
    }
    catch(err){
      console.error(err);
    }

}

const addFavouriteMovie = (movieItem) => {
  console.log(movieItem);
  const newFavouriteArray = [...favourites, movieItem];
  setFavourites(newFavouriteArray);
}

const removeFavouriteMovie = (movieItem) => {
  const newFavouriteArray = favourites.filter(
    (item) => item.imdbID !== movieItem.imdbID
  );

  setFavourites(newFavouriteArray);
  saveToLocalStorage(newFavouriteArray);
};

  useEffect(()=>{
    getApiData(searchValue);
    //console.log(apiData.length);
  } , [searchValue]);

  useEffect(() => {
		const favouriteList = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (favouriteList) {
			setFavourites(favouriteList);
		}
	}, []);

  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  return (
    <div className="container-fluid movie-app">
      <Header />
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieHeadingRow heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<AlbumItem 
        apiData={apiData} 
        AddFavourite={AddFavourite}
        handleFavouritesClick={addFavouriteMovie}
        />
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieHeadingRow heading='Favourites' />
			</div>
			<div className='row'>
				<AlbumItem apiData={favourites} AddFavourite={RemoveFavourites} 
        handleFavouritesClick={removeFavouriteMovie}
        />
			</div>
<Footer />
    </div>
  );
}

export default App;
