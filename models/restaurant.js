import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ratingSchema = new Schema({
  author:{ 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' },
  comment: String,
  rating: Number
})

const restaurantSchema = new Schema({
  name: String,
  location: String,
  website: String,
  cuisineType: [String],
  tags: [String],
  ttreviews: { 
    type: Schema.Types.ObjectId, 
    ref: 'TTReview' },
  ratings: { 
      type: ratingSchema }
},{
  timestamps: true,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export { Restaurant }