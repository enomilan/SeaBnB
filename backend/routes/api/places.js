const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Booking, Accommodation, Review} = require('../../db/models');

//diplay all places
router.get("/", asyncHandler(async (req, res) =>{
    const places = await Accommodation.findAll()
    return res.json(places)
}))

//By ID


//Delete review
router.delete('/review/:id', asyncHandler(async (req,res) => {
      const id = req.params.id
      const review = await Review.findByPk(id);
      await review.destroy();
  
      return res.json()
    })
  )