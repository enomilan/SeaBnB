import React from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import * as placeReducer from '../../store/places'
import './welcome.css'




function Welcome() {
    
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
        <div className='place'>
            <div id="single" className="container">
                <div id ='name'>
                    
                </div>
                <div id='image'>
                    {places.map(place=> <img src={place.image} key={place.id} />)}
                    

                </div>
                <div id='information'></div>
                    <div id='location'>
                        {places.location}
                    </div>
                    <div id ='price'>
                        ${places.price}
                    </div>
                    <div id= 'description'>
                        {places.description}
                    </div>


            </div>
        </div>
    

    )
}

export default Welcome