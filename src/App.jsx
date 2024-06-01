import './App.css'
import data from './Data'

function App() {

  return (
    <div id="main">
    <h1>Movie Cards</h1>
     {data.map((movie,index)=>{
        return(
          <div id="card" key={index}>
            <div id="image">
            <img src={movie.image}></img>
            </div>
            <div id="content">
              <h2>{movie.title}</h2>
              <p>{movie.duration}</p>
              <p>⭐{movie.rating}</p>
              <p>Directed by: <b>{movie.director}</b></p>
              <p>Description: "{movie.description}"</p>

            </div>
          </div>
        );
     })}      
    </div>
  )
}

export default App
