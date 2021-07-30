import { Link } from "react-router-dom"

const MoviesList = ( {movies} ) => {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    return (
        <div className="movies-list">
            {movies && movies.map( (movie) => (
                <div className="movie-preview" key={movie.id}>
                    <Link to={{pathname: `/movies/${movie.title}`, state: { movie: movie,  IMG_PATH: IMG_PATH}}}>   
                        <div className="wrapper">
                            <img src={IMG_PATH + movie.poster_path} alt="movie poster" />
                            <div className="action">
                                <button>View Details</button>
                                <h3>Ratings: {movie.vote_average} / 10</h3>
                                </div>
                        </div>
                        <h2>{movie.title}</h2>
                    </Link>
                    
                    <h3>{parseInt(movie.release_date)} </h3>
                    
                </div>
            ))}
        </div>
    )
}

export default MoviesList
