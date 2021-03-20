



import Rides from '../../fakeData'
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserFriends } from '@fortawesome/free-solid-svg-icons'


const SearchReasult = ({name,pickFrom,pickTo}) => {
    
    console.log('this is props', name,pickFrom,pickTo)
    const filtered = Rides.filter( ride => ride.name === name)
    console.log(filtered)
    return (
        <div className='h-75 bg px-2 py-3 radius-5 span'>
           <section style={{backgroundColor:'orange',padding:'4%',borderRadius:'10px'}}>
               <h5>From: {pickFrom}</h5>
               <h5>To: {pickTo} </h5>
           </section>
           <section className='d-flex justify-content-evenly mt-3 align-items-center'>
               <img src={filtered[0].image } alt="" style={{width:'100px'}} />
                <span>{name}</span>
                <span> <FontAwesomeIcon icon={faUserFriends} /> 4</span>
                <span>$70</span>
           </section>
           <section className='d-flex justify-content-evenly mt-3 align-items-center'>
               <img src={filtered[0].image } alt="" style={{width:'100px'}} />
                <span>{name}</span>
                <span> <FontAwesomeIcon icon={faUserFriends} /> 8</span>
                <span>$40</span>
           </section>
           <section className='d-flex justify-content-evenly mt-3 align-items-center'>
               <img src={filtered[0].image } alt="" style={{width:'100px'}} />
                <span>{name}</span>
                <span> <FontAwesomeIcon icon={faUserFriends} />  2</span>
                <span>$100</span>
           </section>
        </div>
    );
};

export default SearchReasult;