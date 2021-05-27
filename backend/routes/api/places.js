const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Booking, Accommodation, Review} = require('../../db/models');

//diplay all places

router.get("/", asyncHandler(async (req, res) =>{
    const places = await Accommodation.findAll()
    return res.json(places)
}))

//display all users
router.get("/users", asyncHandler(async (req, res) =>{
    const users = await User.findAll()
    return res.json(users)
}))

//get one place

router.get("/:id", asyncHandler(async (req, res) =>{
    const id = req.params.id
    const place = await Accommodation.findByPk(id, {
        include:[
            
            {model: Review, required: false, where: { accommodationId: id}}, 
            {model: Booking, required: false, where: { accommodationId: id}}],})
       
    return res.json(place)
}))

//get reviews By ID
router.get("/:id/reviews", asyncHandler(async (req,res)=>{
    const id = req.params.id
    const reviews = await Review.findAll({where: {userId: id}, include: User})
    return res.json(reviews)
}))

//Post reviews
router.post("/:id/post/review", asyncHandler(async(req,res)=>{
    const placeId = req.params.id
    const { userId, score, review } = req.body;

    const rev = await Review.build({
        userId: userId,
        accommodationId: accommodationId,
        score: score,
        review: review,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
  
      await rev.save()
      const newRev = await Review.findOne({where: {id: rev.id}, include: User})
      return res.json(
        newRev
      );
}))

//Delete review
router.delete('/review/:id', asyncHandler(async (req,res) => {
      const id = req.params.id
      const review = await Review.findByPk(id);
      await review.destroy();
  
      return res.json()
    })
  )


  module.exports = router;