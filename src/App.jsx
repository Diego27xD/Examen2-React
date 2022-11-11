import { Button, Container } from '@mui/material'
import {useEffect, useState} from 'react'
import CardMovie from './components/CardMovie'
import "./App.css"
import {get} from './services/services'
function App() {
    const [movie, setMovie] = useState([])
    const [titulo, setTitulo] = useState("")
    const [movieFilter, setMovieFilter] = useState([])
    // llamada a a la API


    const getMovies = async () => {
        const movies = await get("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json")
        console.log(movies.entries)
        console.log(movie)
        setMovie(movies.entries)
    }
    const filterMovieByTitle = async(title) => {
      if(title == ""){
        await getMovies()
      }else{
        const groupMovie = movie.filter((item) => item.title.includes(title))
        setMovie(groupMovie)
        console.log(groupMovie)
      }
      
    }
    const handleChange = (e) => {
        setTitulo(e.target.value)
        filterMovieByTitle(e.target.value)
        console.log(titulo)
    } 
    console.log(movie)
    useEffect(() => {
        getMovies();
    }, [])

    return (
      <>
        <div className='container contenedor3'>
          <div className='form container'>
            <img src='logo.png' className='logo'></img>
          </div>
        </div>

        <div className='container contenedor2'>
          <div className='form container'>
            <input type="text" className='form-control' name="nombre" placeholder='title' onChange={handleChange}></input>
          </div>
        </div>
        
        <div className='container contenedor4'>
          <div className='form container'>
            <h3>Popular Movies</h3>
          </div>
        </div>
        
        <div className='contened'>
        <div className='container contenedor'>
          
              <CardMovie movies={movie}></CardMovie>            
          </div>
        </div>
        <div className='container contenedor5 text-center'>
          <div className='form container'>
            <img src='logo.png' className='logo'></img>
          </div>
        </div>
      </>
        
    )
}

export default App
