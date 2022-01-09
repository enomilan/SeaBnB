import React from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import * as placeReducer from '../../store/places'
import './places.css'




function Places() {
    
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const places = useSelector((state) => Object.values(state.places))
    //const places = useSelector(state => state.places.currentPlaces);

    useEffect(() => {
        dispatch(placeReducer.getPlaces())
    },[dispatch])

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    



    return(
        <div >
                                             
                
                <div className='places'>
                    {places.map(place=> {
                    return (

                        <div key={place.id}>

                        Location: <a href={`/places/${place.id}`} id='text'>{place.location}</a>
                            <span> Price: ${place.price}</span>
                                                        
                            <div className='photo'><img src={place.image}/></div>
                            <button>Book</button>
                        </div>
                    
                    

                    //   
                    //              
                
                    <div id='location'>
                       
                    </div>
                    <div id ='price'>
                        
                    </div>
                    <div id= 'description'>
                        {places.description}
                    </div>
                    
                )})}

                </div>

            
        </div>
    

    )
}

export default Places