import mongoose from "mongoose";
const { Schema } = mongoose;

const examSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    totalMarks: {
      type: Number,
      required: true,
    },
    passingMarks: {
      type: Number,
      required: true,
    },
    questions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Question",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Exam", examSchema);
