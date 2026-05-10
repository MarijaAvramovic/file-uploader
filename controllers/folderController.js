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

 

export async function getFolderById(req, res) {
try {
    const folderId = Number(req.params.id);

    const folder = await prisma.folder.findUnique({
     where: { id: folderId },
      include: {
        files: true,   // 👈 this pulls all files in folder
        user: true     // optional (if you want owner info)
      }
    });

    if (!folder || folder.userId !== req.user.id) {
      return res.status(404).send("Folder not found");
    }

    res.render("folderDetails", {
      folder,
    });

  } catch (error) {
    console.error(error);
    res.send("Error loading folder");
  }
}

 
export async function deleteFolder(req, res) {
  try {
    const folderId = parseInt(req.params.id);

    
    await prisma.folder.deleteMany({
      where: {
        id: folderId,
        userId: req.user.id,
      },
    });

    res.redirect("/action/view-folders");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting folder");
  }
}