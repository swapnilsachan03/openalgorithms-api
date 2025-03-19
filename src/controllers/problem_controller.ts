import { CreateProblemInput } from "@/generated/graphql";
import { AuthContext } from "@/index";
import { prisma } from "@/lib/prisma";
import { validateSessionToken } from "@/utils/auth_utils";
import { Problem } from "@prisma/client";
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
    throw new GraphQLError("You must be logged in to add problems", {
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

export const getProblemCreatedBy = async (parent: Problem) => {
  const { createdById } = parent;

  if (!createdById) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: createdById },
  });

  return user;
};

export const getProblemLikes = async (parent: Problem) => {
  const { id } = parent;

  const likes = await prisma.problemInteraction.count({
    where: { problemId: id, like: true },
  });

  return likes;
};

export const getProblemDislikes = async (parent: Problem) => {
  const { id } = parent;

  const dislikes = await prisma.problemInteraction.count({
    where: { problemId: id, like: false },
  });

  return dislikes;
};

export const getProblemBookmarksCount = async (parent: Problem) => {
  const { id } = parent;

  const bookmarks = await prisma.bookmarkedProblem.count({
    where: { problemId: id },
  });

  return bookmarks;
};

export const getProblemExamples = async (parent: Problem) => {
  const { id } = parent;

  const examples = await prisma.example.findMany({
    where: { problemId: id },
  });

  return examples;
};

export const getProblemSolutions = async (parent: Problem) => {
  const { id } = parent;

  const solutions = await prisma.solution.findMany({
    where: { problemId: id },
  });

  return solutions;
};

export const getProblemPublishedSolutions = async (parent: Problem) => {
  const { id } = parent;

  const solutions = await prisma.publishedSolution.findMany({
    where: { problemId: id },
  });

  return solutions;
};

export const getProblemHints = async (parent: Problem) => {
  const { id } = parent;

  const hints = await prisma.hint.findMany({
    where: { problemId: id },
  });

  return hints;
};

export const getProblemTopics = async (parent: Problem) => {
  const { id } = parent;

  const problem = await prisma.problem.findUnique({
    where: { id },
    select: { topics: true },
  });

  return problem?.topics;
};

export const getProblemEditorial = async (parent: Problem) => {
  const { id } = parent;

  const editorial = await prisma.editorial.findUnique({
    where: { problemId: id },
  });

  return editorial;
};

export const getProblemDiscussions = async (parent: Problem) => {
  const { id } = parent;

  const discussions = await prisma.discussion.findMany({
    where: { problemId: id },
  });

  return discussions;
};
