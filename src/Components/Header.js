import { Link } from "react-router-dom"




const Header = ({name}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4" to="#">Secure Rider</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link active" to="/ride/car">Destination </Link>
                            <Link className="nav-link active " to="#">Contact </Link>
                            <Link className="nav-link active " to="#">Blog</Link>
                            <Link className="nav-link active " to="/ride/car"> 
                            <button className='btn' style={{backgroundColor:'orange'}}>Login</button> 
                            </Link>
                            <span  className="nav-link active ">{name} </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        
    );
};

export default Header;