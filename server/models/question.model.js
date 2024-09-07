import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    correctOption: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Question", questionSchema);
