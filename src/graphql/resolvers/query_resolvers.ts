import {
  getAllUsers,
  getProfile,
  getUserSessions,
} from "@/controllers/user_controller";

export const queryResolvers = {
  Query: {
    user: getProfile,
    users: getAllUsers,
  },
  User: {
    sessions: getUserSessions,
  },
};
