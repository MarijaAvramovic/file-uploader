import { prisma } from "../lib/prisma.js"; 

export async function getFolders(req, res) {
  const folders = await prisma.folder.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.render("folders", {
    folders,
  });
}
export function newFolderGet(req, res) {
   

  res.render("foldersCreateNew");
}
 