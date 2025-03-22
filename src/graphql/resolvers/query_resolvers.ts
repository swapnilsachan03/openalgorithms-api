import {
  getAllProblems,
  getProblem,
  getProblemBookmarksCount,
  getProblemCreatedBy,
  getProblemDiscussions,
  getProblemDislikes,
  getProblemEditorial,
  getProblemExamples,
  getProblemHints,
  getProblemLikes,
  getProblemUserSolutions,
  getProblemSolutions,
  getProblemTopics,
} from "@/controllers/problem_controller";

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
  Problem: {
    createdBy: getProblemCreatedBy,
    likes: getProblemLikes,
    dislikes: getProblemDislikes,
    bookmarks: getProblemBookmarksCount,
    examples: getProblemExamples,
    solutions: getProblemSolutions,
    userSolutions: getProblemUserSolutions,
    hints: getProblemHints,
    topics: getProblemTopics,
    editorial: getProblemEditorial,
    discussions: getProblemDiscussions,
  },
};
