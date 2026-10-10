import mongoose, { Schema } from "mongoose";

interface IColumn extends Document {
  name: string;
  boardId: mongoose.Types.ObjectId;
  order: number;
  jobApplications: mongoose.Types.ObjectId[];
}

const columnSchema = new Schema<IColumn>(
  {
    name: {
      type: String,
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "BoardModel",
    },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
    jobApplications: [
      { type: Schema.Types.ObjectId, ref: "JobApplicationModel" },
    ],
  },
  { timestamps: true },
);

export const ColumnModel =
  mongoose.models.ColumnModel<IColumn> ||
  mongoose.model<IColumn>("ColumnModel", columnSchema);
