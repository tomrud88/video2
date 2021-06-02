
import React,{useState,useEffect} from 'react'
import Movie from './components/Movie'


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

const SEARCH_API = "http://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const[movies,setMovies] = useState([])
  const[searchTerm,setSearchTerm] = useState('')

 
 useEffect(()=>{
  getMovies(FEATURED_API)
},[])

const getMovies =(API)=>{
  fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setMovies(data.results)
 })
}
 
 
 const handleInputChange=(e)=>{
    setSearchTerm(e.target.value)
 }

 const handleInputSubmit=(e)=>{
       e.preventDefault();
  
  if(searchTerm){
    getMovies(SEARCH_API+searchTerm)
   
    setSearchTerm('')
  }
}
 

  return (
    <div>
      <header className='top-section'>
        <form onSubmit={handleInputSubmit}>
          <input 
            type='search'  
            placeholder='Search...' 
            value={searchTerm}
            onChange={handleInputChange}>
          </input>
       </form>
      </header>
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie)=>
          <Movie key={movie.id} {...movie}/>
      )}  
    </div>
    </div>
  );
}

export default App;
