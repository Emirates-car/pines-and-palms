import mongoose from 'mongoose';

/* RecipeSchema will correspond to the recipe collection in the MongoDB database. */
const vwSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  partname: {
    type: String,
    required: true,
  },
  partnumber: {
    type: String,
    required: true,
  },
  compatibility: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

export default mongoose.models.Volkswagen ||
  mongoose.model('Volkswagen', vwSchema);
