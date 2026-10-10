import mongoose, { Schema } from "mongoose";

interface IBoard extends Document {
  name: string;
  userId: string;
  columns: mongoose.Types.ObjectId[];
}

const boardSchema = new Schema<IBoard>(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
    columns: [{ type: Schema.Types.ObjectId, ref: "ColumnModel" }],
  },
  { timestamps: true },
);

export const BoardModel =
  mongoose.models.BoardModel<IBoard> ||
  mongoose.model<IBoard>("BoardModel", boardSchema);
