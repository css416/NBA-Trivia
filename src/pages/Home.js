import { Link } from 'react-router-dom';

// components
import logo from "../assets/images/home-logo.png";

const Home = () => {

    return (
        <div className="home">
            <div className="main-menu">
                <img src={logo} alt="" className='home-img' />
                <div className="start-button">
                    <Link to="/quiz" className='start-btn'>start</Link>
                </div>
                
            </div>
        </div>
    );
}
 
export default Home;