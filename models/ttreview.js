import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ttReviewSchema = new Schema({
  url: String,
  restaurant: { 
    type: Schema.Types.ObjectId, 
    ref: 'Restaurant' },
  sharer: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' },
  likes: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' }],
  tiktoker: String
},{
  timestamps: true,
})

const TTReview = mongoose.model('TTReview', ttReviewSchema)

export { TTReview }