import mongoose from "mongoose";

const CommentScheme = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   video: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Video",
  //   },
});

const model = mongoose.model("Comment", CommentScheme);

export default model;
