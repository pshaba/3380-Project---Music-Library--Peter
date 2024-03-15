import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => (
    <nav>
        <Link to="/" className='link-class'>Home</Link>
        <Link to="/debug-database" className='link-class'>Debug Database</Link>
    </nav>
);

export default Navbar;
