import { Link } from "react-router-dom"


const styling={
    marginLeft:'40%'
}

const Header = ({name}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand fs-4" to="#">Secure Rider</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link active" to="/ride/car">Destination </Link>
                            <Link class="nav-link active " to="#">Contact </Link>
                            <Link class="nav-link active " to="#">Blog</Link>
                            <Link class="nav-link active " to="/ride/car"> 
                            <button className='btn' style={{backgroundColor:'orange'}}>Login</button> 
                            </Link>
                            <span style={{color:'black',textDecoration:'none'}}>{name} </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        
    );
};

export default Header;