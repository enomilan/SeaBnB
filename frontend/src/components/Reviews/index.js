import React, {useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as placeReducer from '../../store/places'

function Reviews() {
    const dispatch = useDispatch()   


    return(
        <div>
            <div>
            <form onSubmit={}>
                <textarea
                    name='comment'
                    rows='5'
                    cols='50'
                    onChange={}
                    value={null}
                >
                    Submit Review
                </textarea>

            </form>
        </div>
            <div>
                <form onSubmit={}>
                    
                </form>
            </div>
        </div>
        
            
    )

}