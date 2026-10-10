import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { initailizeUserBoard } from "../init-user-board";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          try {
            await initailizeUserBoard(user.id);
          } catch (err) {
            console.error("Board init failed for user", user.id, err);
          }
        },
      },
    },
  },
});

export const getSession = async () => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  return result;
};
