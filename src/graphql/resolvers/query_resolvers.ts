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
} from "@controllers/problem_controller";

import {
  getUserSolution,
  getUserSolutionsLikes,
  getUserSolutionsDislikes,
} from "@controllers/user_solution_controller";

import {
  getAllUsers,
  getProfile,
  getUser,
  getUserSessions,
} from "@controllers/user_controller";

export const queryResolvers = {
  Query: {
    user: getUser,
    profile: getProfile,
    users: getAllUsers,
    problem: getProblem,
    problems: getAllProblems,
    userSolution: getUserSolution,
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
  UserSolution: {
    likes: getUserSolutionsLikes,
    dislikes: getUserSolutionsDislikes,
  },
};
