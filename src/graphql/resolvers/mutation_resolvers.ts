import { createProblem, updateProblem } from "@/controllers/problem_controller";

import {
  likeDislikeProblem,
  updateProfile,
} from "@/controllers/user_controller";

export const mutationResolvers = {
  Mutation: {
    updateProfile,
    createProblem,
    updateProblem,
    likeDislikeProblem,
  },
};
