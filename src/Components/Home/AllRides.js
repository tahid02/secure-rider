import { Link } from "react-router-dom"
import './home.css'





const AllRides = ({ name, image }) => {
    return (
        <div className="col col-md-3 col-sm-6 col-12 mt-5">
            <Link to={`/ride/${name}`}>
            
            <div className="card h-100 p-2 bgSingle">
                {/* ride image in card */}
                <div >
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">

                </div>
                <div className="card-footer">
                    {/* ride name in card */}
                    <h5 className='name text-center'>{name} </h5>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default AllRides;