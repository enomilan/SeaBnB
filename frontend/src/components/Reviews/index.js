import React, {useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as placeReducer from '../../store/places'

function Reviews() {
    const dispatch = useDispatch()   

    const [postNewRating, setPostNewRating] = useState("")

    return(
        <div>
            <div>
            <form onSubmit={null}>
                <textarea
                    name='comment'
                    rows='5'
                    cols='50'
                    onChange={null}
                    value={postNewRating}>
                
                    Submit
                </textarea>

            </form>
        </div>
            <div>
                <form onSubmit={null}>

                </form>
            </div>
        </div>
        
            
    )

}

export default Reviews