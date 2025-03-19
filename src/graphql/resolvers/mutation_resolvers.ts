import { createProblem } from "@/controllers/problem_controller";
import { updateProfile } from "@/controllers/user_controller";

export const mutationResolvers = {
  Mutation: {
    updateProfile,
    createProblem,
  },
};
