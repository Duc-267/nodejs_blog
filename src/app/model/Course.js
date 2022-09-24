const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongoose = require('mongoose');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name'},
    videoId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', Course);
