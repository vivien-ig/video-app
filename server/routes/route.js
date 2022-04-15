const express= require('express');
const axios = require('axios');   
const api_key= '70a3ff69104d4231aafc57c421b8d6ea';
const api_key_movies= '5dfdd327';
const llallGamesURLlll = `https://api.rawg.io/api/games?key=${api_key}`;
//const gameByIdURL = `https://api.rawg.io/api/games/${gameId}?key=${api_key}&page=1&page_size=1`;
const queryStringAll='&page=1&page_size=1'; 
const allGamesURL=`https://api.rawg.io/api/platforms?key=${api_key}&page=1&page_size=2`;
//let searchValue='batman';
const movies= `http://www.omdbapi.com/`;
const router = express.Router();

//all movies
router.get('/movies/:searchValue', async (req,res)=>{
	let searchValue= req.params.searchValue
	console.log(searchValue);
	try{
		const { data } = await axios.get(`${movies}?s=${searchValue}&apikey=${api_key_movies}`)
		res.json(data);
	}catch(err){
		res.json({message:err})
	}
	
	
});

//game by id
router.get('/games/:id', async (req,res)=>{
	const {id}= req.params;
	console.log("game-id: "+id);
	const gameByIdURL = `https://api.rawg.io/api/games/${id}?key=${api_key}&page=1&page_size=1`;

	try{
		const { data } = await axios.get(gameByIdURL)
		res.json(data);
	}catch(err){
		res.json({message:err})
	}
	
	
});


/* const getData=async ()=> {
	try {
	const { data } = await axios.get(URL)
	console.log("resp:"+data);
  return data;
	
	}
  catch(error) {
    console.log(error);
  };
} */


  /* try {
    const { data } = await axi.get('www.datatest');
    return data;
  } catch (err) {
    console.log(err);
  } */


module.exports = router;