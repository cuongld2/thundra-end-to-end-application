import { Link } from 'react-router-dom';

const MovieList = ({movie, title}) => {
    
    return ( 
        <div className="movie-list">
            <h2>{title}</h2>
            {movie.map(eachmovie => (
                <div className="movie-preview" key={eachmovie._id}>
                    <Link to={`/posts/${eachmovie._id}`}>
                        <h2>{eachmovie.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}

const endpoint="New end point";
 
export default MovieList;