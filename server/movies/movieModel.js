var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  release: String,
  thumbnail: String,
  description: String, 
  watched: Number
});

// instantiate and export a 'Movie' model, which is an instance of movieSchema
module.exports = mongoose.model('Movie', movieSchema);
