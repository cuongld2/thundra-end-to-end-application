import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const MovieDetails = () => {
    const { id } = useParams();
    const { data: movie, error, isPending } =  useFetch('/posts/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('/posts/'+ movie._id, {
            headers: {"Content-Type": "application/json",
            'Authorization': '{token}'},
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    const endpoint="New end point";
    

    return ( 
        <div className="movie-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{movie.title}</h2>
                <div>{movie.content}</div>
                <div>{movie.authorId}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default MovieDetails;