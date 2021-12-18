import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Thundra movie Application</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create movie</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;