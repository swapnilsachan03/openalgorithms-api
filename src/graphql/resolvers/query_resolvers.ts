import { getAllProblems, getProblem } from "@/controllers/problem_controller";

import {
  getAllUsers,
  getProfile,
  getUserSessions,
} from "@/controllers/user_controller";

export const queryResolvers = {
  Query: {
    user: getProfile,
    users: getAllUsers,
    problem: getProblem,
    problems: getAllProblems,
  },
  User: {
    sessions: getUserSessions,
  },
};
