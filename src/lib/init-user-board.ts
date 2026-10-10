import { ColumnModel } from "@/models/columns";
import { BoardModel } from "@/models/board";
import { connectDB } from "./mongodb";

const DEFAULT_COLUMNS = [
  { name: "Wish List", order: 0 },
  { name: "Aplied", order: 1 },
  { name: "Interviewing", order: 2 },
  { name: "Offer", order: 3 },
  { name: "Rejected", order: 4 },
];

export async function initailizeUserBoard(userId: string) {
  try {
    await connectDB();

    const existingBoard = await BoardModel.findOne({
      userId,
      name: "Job Hunt",
    });

    if (existingBoard) {
      return existingBoard;
    }

    const board = await BoardModel.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        ColumnModel.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplication: [],
        }),
      ),
    );

    board.columns = columns.map((col) => col._id);

    await board.save();

    return board;
  } catch (error) {
    throw error;
  }
}
