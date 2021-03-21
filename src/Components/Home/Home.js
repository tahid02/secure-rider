

import Rides from '../../fakeData'
import AllRides from './AllRides';

const Home = () => {
    return (
        <div style={{height:'80vh',width:'100vw',backgroundColor:'lightGray'}}>
            <div className=''>
                <div className="row g-3  m-3 ">

                    {
                        Rides.map(ride => <AllRides {...ride} />)
                    }
                </div>
            </div>
        </div>


    );
};

export default Home;