import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as placeReducer from '../../store/places'

function Place() {
    
    const {id} = useParams()
    
    const [place, setPlace] = useState(null)


    useEffect(() => {
        async function fetchData() {
            const res = await fetch (`/api/places/${id}`)
            const data = await res.json()

            

            setPlace(data)

        }

        fetchData()
    },[id])

    
    

    return place &&(
        <div >
            <div>{place.name}</div>
            <div>{place.location}</div>
            <div> Yours for only ${place.price} a night</div>
            <div>{place.description}</div>
            <img src={place.image}/>
        </div>
    )
}

export default Place
