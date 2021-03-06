var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SnippetSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  tags: [{ type: String }]
});

var Snippet = mongoose.model("Snippet", SnippetSchema);
module.exports = Snippet;
