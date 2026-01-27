import _ from "lodash";
import { GraphQLError } from "graphql";

import { prisma } from "@lib/prisma";
import { validateSessionToken } from "@utils/auth_utils";
import {
  CreateTopicInput,
  Problem,
  UpdateTopicInput,
} from "@generated/graphql";
import { AuthContext } from "@/src";

export const createTopic = async (
  parent: unknown,
  args: { input: CreateTopicInput },
  contextValue: AuthContext
) => {
  const { token } = contextValue;

  if (_.isNil(token)) {
    throw new GraphQLError("You must be logged in to create new topics", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }

  const sessionRes = await validateSessionToken(token);

  if (!sessionRes?.user || sessionRes.user.role !== "ADMIN") {
    throw new GraphQLError("You are not authorized for this operation", {
      extensions: { code: "UNAUTHORIZED" },
    });
  }

  const { name, slug, description } = args.input;

  const problem = await prisma.topic.create({
    data: {
      name,
      slug,
      description,
    },
  });

  return problem;
};

export const updateTopic = async (
  parent: unknown,
  args: { input: UpdateTopicInput },
  contextValue: AuthContext
) => {
  const { token } = contextValue;

  if (_.isNil(token)) {
    throw new GraphQLError("You must be logged in to create new topics", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }

  const sessionRes = await validateSessionToken(token);

  if (!sessionRes?.user || sessionRes.user.role !== "ADMIN") {
    throw new GraphQLError("You are not authorized for this operation", {
      extensions: { code: "UNAUTHORIZED" },
    });
  }

  const { id, name, slug, description } = args.input;

  const problem = await prisma.topic.update({
    where: { id },
    data: {
      name,
      slug,
      description,
    },
  });

  return problem;
};

export const getAllTopics = async () => {
  const topics = await prisma.topic.findMany();
  return topics;
};

export const getProblemTopics = async (parent: Problem) => {
  const { id } = parent;

  const problemTopics = await prisma.topic.findMany({
    where: {
      problems: { some: { id } },
    },
  });

  return problemTopics;
};
