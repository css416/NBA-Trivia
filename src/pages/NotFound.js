import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-container">
                <h2>Whoops!</h2>
                <div className="not-found-content">
                    <div className="not-found-img">
                        <img src="https://media.tenor.com/0pmpMlo8eL8AAAAC/what-huh.gif" alt="" />
                    </div>
                    <div className="not-found-link">
                        <span>404 - Page Not Found</span>
                        <p>The page you are looking for doesn't exist.</p>
                        {/* <button className="btn btn-not-found">Back to Home</button> */}
                        <Link to="/" className="btn btn-not-found">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default NotFound;