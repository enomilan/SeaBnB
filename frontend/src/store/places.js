import { csrfFetch } from './csrf';

//define action types

const LOAD_ONE = 'places/LOAD_ONE'
const LOAD_ALL = 'places/LOAD_ALL'
const GET_REVIEWS = 'places/GET_REVIEWS'
const POST_REVIEW = 'places/POST_REVIEW'
const DELETE_REVIEW = 'places/DELETE_REVIEW'


//action creators
const getOne = (place) =>({
    type: LOAD_ONE,
    place,
})

const getAll = (places) => ({
    type: LOAD_ALL,
    places,

})


const getAllReviews = (reviews) => ({
    type: GET_REVIEWS,
    reviews,

})

const postOneReview = (review) => ({
    type: POST_REVIEW,
    review,
    
})

const killReview = (review) => ({
    type: DELETE_REVIEW,
    review,
    
})

//define thunks
export const getPlace = (id) => async dispatch => {
    const res = await fetch(`/api/places/${id}`)

    if (res.ok) {
        const place = await res.json()
        dispatch(getOne(place));
    }
}

export const getPlaces = () => async dispatch => {
    const res = await fetch(`/api/places`)

    if (res.ok) {
        const places = await res.json()
        
        dispatch(getAll(places));
    }
}

export const getReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/places/${id}/reviews`);
  
    if(response.ok) {
        const reviews = await response.json();
        dispatch(getAllReviews(reviews));
    }
  }

  export const postReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/places/${review.id}/post/review`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if(response.ok) {
        const review = await response.json();
        dispatch(postOneReview(review));
        return review;
    }
  };

  export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/places/review/${id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        dispatch(killReview(id));
    }
}

//define initial state
const initialState = {};

//define reducer
const placeReducer = (state = initialState, action) => {
    //let newState
    switch (action.type) {
        case LOAD_ONE: {
            const placeState = {...state}
            placeState.currentPlace = action.place
            return placeState
        }
        case LOAD_ALL: {
            let newState ={}
            action.places.forEach((place) =>{
                newState[place.id] = place
            })
             return {...newState};
        }
        case GET_REVIEWS:{
            const reviews = action.reviews
            return {...state, reviews}  
        }
        case POST_REVIEW:{
            let newState = { ...state }
            newState.reviews = [...state.reviews, action.review]
            return newState 
        }
        case DELETE_REVIEW:{
            let newState = { ...state }
            const newReviews = newState.reviews.filter(review => review.id !== action.review);
            newState.reviews = [...newReviews]
            return newState
        }
        default:
            return state; 
    }

}

//export reducer
export default placeReducer