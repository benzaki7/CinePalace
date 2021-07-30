import { useLocation } from "react-router-dom"
import Footer from "./Footer"

const MovieDetails = () => {

    const location = useLocation()
    const {movie, IMG_PATH} = location.state
    return (
        <div>
            {<article className="movie-details" key={movie.id}>
                <img src={IMG_PATH + movie.poster_path} alt="movie poster" />
                <div className="info">
                    <h2>{movie.title}</h2>
                    <h3>Ratings: {movie.vote_average} / 10</h3>
                    <h3>Release Date: {movie.release_date} </h3>
                    <p><span>Overview:</span> {movie.overview}</p>
                </div>
            </article>}
            <Footer />
        </div>
    )
}

export default MovieDetails
