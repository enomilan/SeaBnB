import React, {useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as placeReducer from '../../store/places'

function Reviews() {
    const dispatch = useDispatch()   

    const [postNewRating, setPostNewRating] = useState("")


    //activate edit ratings
    const [editRatings, setEditRatings] = useState(false)
    const [editedRating, setEditedRating] = useState('')

    const editIt = (e) => {
        setEditRatings(true)
    }


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
                
                    Rating
                </textarea>
                <button type='submit' id='comment_button'>Submit</button>
            </form>
        </div>
            <div>
                {editRatings ? (
                <form onSubmit={null}>
                <textarea 
                    name='edit'
                    onChange={null}
                    value={editedRating}
                />
                <button type='submit' id='comments_button'>Done</button>
                </form>):( <>

                <button onClick={editIt}id='comments_button'>Edit</button>
                <button onClick={null}id='comments_button'>Delete</button> </>)}
            </div>
        </div>
        
            
    )

}

export default Reviews