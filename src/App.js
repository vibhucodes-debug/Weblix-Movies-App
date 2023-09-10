import React, {useEffect, useState} from 'react'
import './App.css';
import MovieCard from "./MovieCard.jsx"

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=73f39f42";  



const App =()=>{

    const [movies,setMovies] = useState([]);
    const [title,setTitle] = useState('Spider man');

    const searchMovie = async(title)=>{

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();  // use await here too.
        
        setMovies(data.Search);
    }
    
    useEffect(()=>{
        
        searchMovie(title);
        
    },[title])

    return(
        <div className='app'>
           <h1>Webflix</h1>
           <div className="search">
                <input
                    placeholder='Search for movies'
                    value={title}
                    onChange={(event)=>{return setTitle(event.target.value)}}
                />
                <img src='https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg' alt='searchicon'></img>
           </div>

            {
                movies?.length>0
                ?(
                    <div className='container'>
                       { movies.map((movie)=>(
                            <MovieCard movie={movie} />
                       ))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>No movies found :(</h2>
                    </div>   
                )
            }

        </div>

    )
}

export default App;