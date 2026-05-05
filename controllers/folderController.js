import { prisma } from "../lib/prisma.js"; 

export async function getFolders(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
        userId: req.user.id, 
      },
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
 

 

export async function newFolderPost(req, res) {
 try {
    const { name } = req.body;

     
 
    await prisma.folder.create({
      data: {
        name: name,
        userId: req.user.id,  
      },
    });

     
    const folders = await prisma.folder.findMany({
      where: {
        userId: req.user.id, 
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.render("folders", {
      folders 
    });

  } catch (error) {
    console.error(error);
    res.send("Error creating folder");
  }
}