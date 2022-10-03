import MovieList from './MovieList';
import useFetch from './useFetch';

const Home = () => {
    const {data: movie, isPending, error} = useFetch('/posts');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <MovieList movie={movie} title="All movies"/>
        </div>
     );
}

const endpoint="New end point";

export default Home;