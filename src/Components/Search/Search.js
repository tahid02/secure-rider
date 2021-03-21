


import { useState } from 'react';
import { useParams } from 'react-router';
import SearchReasult from './SearchReasult';
import './search.css'




const Search = () => {

    const { name } = useParams()
    const [search, setSearched] = useState(true)
    const [destination, setDestination] = useState({
        pickFrom: '',
        pickTo: ''
    })

    const handleChange = (e) => {
        const newDestination = { ...destination }
        newDestination[e.target.name] = e.target.value
        setDestination(newDestination)

    }




    return (
        <div className='row g-4 m-4'>
            <div className='col col-md-4 col-sm-6 col-12 '>


                {
                    search ? (
                        <div className='h-auto bg p-2'>

                            {/* pick from input field */}
                            <div> 
                                <label htmlFor="pickFrom">Pick from</label>
                                <input type="text" name="pickFrom" onChange={handleChange} />

                            </div>

                            {/* pick to input field */}
                            <div>
                                <label htmlFor="pickTo">Pick to</label>
                                <input type="text" name="pickTo" onChange={handleChange} />

                            </div>


                            <button onClick={() => setSearched(false)} className='btn mt-3 button'>search</button>


                        </div>
                    ) : (
                        
                        <SearchReasult name={name} {...destination} />


                    )
                }
            </div>

            <div className='col col-md-8 col-sm-6 col-6 radius-5'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616218614612!5m2!1sen!2sbd" style={{ border: '0', height: '450px', width: '600px' }} loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default Search;