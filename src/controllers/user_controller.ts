import { Request, Response } from "express";

import { prisma } from "@lib/prisma";

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

export const deleteProfile = async (req: Request, res: Response) => {
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

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  res.status(200).json({ message: "User deleted" });
};
