import { CreateProblemInput } from "@/generated/graphql";
import { AuthContext } from "@/index";
import { prisma } from "@/lib/prisma";
import { validateSessionToken } from "@/utils/auth_utils";
import { GraphQLError } from "graphql";
import _ from "lodash";

export const createProblem = async (
  parent: any,
  args: { input: CreateProblemInput },
  contextValue: AuthContext,
  info: any
) => {
  const { token } = contextValue;

  if (_.isNil(token)) {
    throw new GraphQLError("You must login to manipulate data", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }

  const sessionRes = await validateSessionToken(token);

  if (!sessionRes?.user || sessionRes.user.role !== "ADMIN") {
    throw new GraphQLError("You are not authorized for this operation", {
      extensions: { code: "UNAUTHORIZED" },
    });
  }

  const {
    title,
    slug,
    description,
    createdById,
    timeLimitInSeconds,
    memoryLimitInMB,
    difficulty,
    examples,
    solutions,
    hints,
    topics,
  } = args.input;

  const hintsInput = hints.map(hint => ({
    content: hint,
  }));

  const topicsInput = topics.map(id => ({ id }));

  const problem = await prisma.problem.create({
    data: {
      title,
      slug,
      description,
      createdById,
      timeLimitInSeconds,
      memoryLimitInMB,
      difficulty,
      examples: {
        create: examples,
      },
      solutions: {
        create: solutions,
      },
      hints: { createMany: { data: hintsInput } },
      topics: {
        connect: topicsInput,
      },
    },
  });

  return problem;
};

export const getProblem = async (
  parent: any,
  args: { id: string },
  contextValue: AuthContext,
  info: any
) => {
  const { id } = args;

  const problem = await prisma.problem.findUnique({
    where: { id },
  });

  return problem;
};

export const getAllProblems = async (
  parent: any,
  args: any,
  contextValue: AuthContext,
  info: any
) => {
  const problems = await prisma.problem.findMany();

  return problems;
};
