var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  year: Number,
  url: String,
  thumbnail: String,
  watched: Number
});

// instantiate and export a 'Movie' model, which is an instance of movieSchema
module.exports = mongoose.model('Movie', movieSchema);
