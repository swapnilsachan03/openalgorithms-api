import { updateProfile } from "@/controllers/user_controller";

export const mutationResolvers = {
  Mutation: {
    updateProfile,
  },
};
