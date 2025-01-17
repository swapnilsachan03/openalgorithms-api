import { Request, Response } from "express";

import { prisma } from "@lib/prisma";
import { validateSessionToken } from "@/utils/auth_utils";

export const getProfile = async (req: Request, res: Response) => {
  const { userId } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user === null) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json({ user });
};

export const updateProfile = async (req: Request, res: Response) => {
  const { userId, name, image } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user === null) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      image,
    },
  });

  res.status(200).json({ message: "User updated" });
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const token = req.headers.authorization;

  if (!userId || !token) {
    res
      .status(400)
      .json({ message: "You are not authorized for this operation" });
    return;
  }

  const sessionRes = await validateSessionToken(token);

  if (sessionRes.user?.id !== userId) {
    res.status(401).json({ message: "Invalid user ID" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user === null) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  res.status(200).json({ message: "User deleted" });
};
