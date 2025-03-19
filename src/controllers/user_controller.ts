import { GraphQLError } from "graphql";

import { prisma } from "@lib/prisma";
import { User } from "@prisma/client";

import { validateSessionToken } from "@/utils/auth_utils";
import { AuthContext } from "@/index";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getProfile = async (parent: any, args: { id: string }) => {
  const { id } = args;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (user === null) {
    throw new GraphQLError("User not found", {
      extensions: { code: "USER_NOT_FOUND" },
    });
  }

  return user;
};

export const getUserSessions = async (parent: User, args: { id: string }) => {
  const { id } = parent;

  const sessions = await prisma.session.findMany({
    where: {
      userId: id,
    },
  });

  return sessions;
};

export const updateProfile = async (
  parent: any,
  args: {
    input: {
      id: string;
      name: string;
      image: string;
    };
  }
) => {
  const { id, name, image } = args.input;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (user === null) {
    throw new GraphQLError("User not found", {
      extensions: { code: "USER_NOT_FOUND" },
    });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      image,
    },
  });

  return updatedUser;
};

export const deleteProfile = async (
  parent: any,
  args: { userId: string },
  contextValue: any,
  info: AuthContext
) => {
  const { userId } = args;
  const { token } = info;

  if (!userId || !token) {
    throw new GraphQLError("You are not authorized for this operation", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }

  const sessionRes = await validateSessionToken(token);

  if (sessionRes?.user?.id !== userId) {
    throw new GraphQLError("Invalid user ID", {
      extensions: { code: "UNAUTHORIZED" },
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user === null) {
    throw new GraphQLError("User not found", {
      extensions: { code: "USER_NOT_FOUND" },
    });
  }

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return {
    isSuccess: true,
    message: "User deleted successfully",
  };
};
