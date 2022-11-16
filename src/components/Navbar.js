import { Link } from 'react-router-dom';

import headerLogo from '../assets/images/home-logo.png'

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to="/"><img src={headerLogo} alt="" /></Link>
                    </div>
                    {/* <div className="navbar-links">
                        <ul>

                        </ul>
                    </div> */}
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;