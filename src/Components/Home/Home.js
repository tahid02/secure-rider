

import { Link } from 'react-router-dom';
import Rides from '../../fakeData'
import AllRides from './AllRides';
import bg from './home.css'
const Home = () => {
    return (
        <div className=''>
            <div className="row g-3  m-3">
          
          {
              Rides.map( ride => <AllRides {...ride }/>)
          }
      </div>
        </div>
  
    );
};

export default Home;