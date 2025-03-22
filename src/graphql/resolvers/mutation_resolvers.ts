import {
  createProblem,
  deleteProblem,
  updateProblem,
} from "@/controllers/problem_controller";

import {
  likeDislikeProblem,
  updateProfile,
} from "@/controllers/user_controller";

export const mutationResolvers = {
  Mutation: {
    updateProfile,
    createProblem,
    updateProblem,
    deleteProblem,
    likeDislikeProblem,
  },
};
