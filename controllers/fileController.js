import { prisma } from "../lib/prisma.js"; 

export async function uploadFile(req, res) {
  const folders = await prisma.folder.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.render("uploadFile", {
    folders
  });

};